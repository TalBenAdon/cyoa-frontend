import { createContext, ReactNode, useContext, useRef, useState } from "react";
import httpClient from "../api/httpClient";


type AdventureContextType = {
    adventureId: string | null;
    setAdventureId: (id: string) => void
    getAdventureInfo: (id: string) => void
    story: string;
    options: string[];
    streamAIResponse: (url: string, payload: any) => Promise<void>;
    reset: () => void;
    idList: string[]
    getAdventuresIds: () => void;
    adventureInfo: AdventureInfoResponse | null
}

type History = {
    text: string;
    options: string[];
    scene: number
}[]

type AdventureInfoResponse = {
    id: string;
    type: string;
    sceneNumber: number;
    history: History
}

type AdventuresList = {
    adventuresIds: string[]
}


const AdventureContext = createContext<AdventureContextType | undefined>(undefined);

export const AdventureProvider = ({ children }: { children: ReactNode }) => {
    const [story, setStory] = useState<string>("")
    const [options, setOptions] = useState<string[]>([])
    const [adventureInfo, setAdventureInfo] = useState<AdventureInfoResponse | null>(null)
    const [adventureId, setAdventureId] = useState<string | null>(null)
    const bufferRef = useRef("");
    const [idList, setIdList] = useState<string[]>([])

    const reset = () => {
        setStory("")
        setOptions([])
        bufferRef.current = ("")
    };

    // const url = "http://localhost:8000"

    const appendingFunction = (toAppend: string, currentTag: string) => {
        switch (currentTag) {

            case "text":
                setStory(prev => prev + toAppend);
                break;
            case "option1":
                setOptions((prev) => {
                    const updated = [...prev]
                    updated[0] = (updated[0] || "") + toAppend;
                    return updated
                });
                break;
            case "option2":
                setOptions((prev) => {
                    const updated = [...prev]
                    updated[1] = (updated[1] || "") + toAppend;
                    return updated
                });
                break;
            case "option3":
                setOptions((prev) => {
                    const updated = [...prev]
                    updated[2] = (updated[2] || "") + toAppend;
                    return updated
                });
                break;
            default:
                break;
        }
    }

    const streamAIResponse = async (url: string, payload: object) => {
        console.log(url);

        const response = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });





        const thisAdventureId = response.headers.get("X-Adventure-ID")

        console.log(thisAdventureId);
        if (thisAdventureId) {
            setAdventureId(thisAdventureId)
        }


        (async () => {

            const reader = response.body?.getReader();
            const decoder = new TextDecoder("utf-8");

            reset()
            let currentTag = ""


            while (true) {
                const { value, done } = await reader!.read();
                if (done) {
                    break;
                }

                const chunk = decoder.decode(value, { stream: true });
                bufferRef.current += chunk;
                console.log({ "currentTag": currentTag });
                console.log({ "currentBuffer": bufferRef.current });

                const tagStart = bufferRef.current.indexOf("<");
                const tagEnd = bufferRef.current.indexOf(">", tagStart);

                if (tagStart !== -1) { // tag start found
                    console.log({ "tag start detected!:": bufferRef.current });



                    if (tagEnd !== -1) { //tag end also found
                        // does buffer has 2 tags?
                        const matches = bufferRef.current.match(/<[^>]+>/g);
                        if (matches && matches.length >= 2) {
                            console.log("two tags within the buffer");
                            bufferRef.current = matches[1]
                        }

                        const tagToCheck = bufferRef.current.slice(tagStart + 1, tagEnd).trim()
                        if (!tagToCheck.includes("/") && !tagToCheck.includes("\\")) {

                            currentTag = bufferRef.current.slice(tagStart + 1, tagEnd).trim() //extracting current tag
                            console.log({ "Tag Changed!": currentTag });
                            bufferRef.current = bufferRef.current.slice(0, tagStart) + bufferRef.current.slice(tagEnd + 1) // cut away the tag from the buffer
                            const toAppend = bufferRef.current;

                            appendingFunction(toAppend, currentTag) //appending buffer to correct placement
                            bufferRef.current = ""; // buffer cleanup
                        } else {


                            bufferRef.current = bufferRef.current.slice(tagEnd + 1)
                            // const toAppend = bufferRef.current;
                            continue

                        }

                    } else {
                        const trailText = bufferRef.current.slice(0, tagStart)
                        appendingFunction(trailText, currentTag)
                        continue
                    }

                } else {
                    // if no tag found, append to correct placement and cleanup as usual
                    const toAppend = bufferRef.current;
                    appendingFunction(toAppend, currentTag)
                    bufferRef.current = "";
                }


            }
        })()
        // return thisAdventureId
    };

    const getAdventureInfo = async (adventureId: string) => {
        const response = await httpClient.get<AdventureInfoResponse>(`/adventure/info/${adventureId}`)
        const advInfo = response.data
        setAdventureInfo(advInfo)

        reset()

        const latestScene = advInfo.history[advInfo.history.length - 1]


        setStory(latestScene.text)
        setOptions(latestScene.options)

    }

    const getAdventuresIds = async () => {
        const response = await httpClient.get<AdventuresList>("adventure/adventures")
        const ids = response.data.adventuresIds
        console.log("getting adventuresIds");

        console.log(ids);
        setIdList(ids)


        if (ids.length > 0) {
            setAdventureId(ids[0])
        }
    }

    return (
        <AdventureContext.Provider value={{ story, options, streamAIResponse, reset, adventureId, setAdventureId, getAdventureInfo, idList, getAdventuresIds, adventureInfo }}>
            {children}
        </AdventureContext.Provider>
    )


}

export const useAdventure = () => {
    const ctx = useContext(AdventureContext);
    if (!ctx) throw new Error("useAdventure must be used inside AdventureProvider")
    return ctx
}