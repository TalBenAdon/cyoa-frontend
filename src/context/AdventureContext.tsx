import { createContext, ReactNode, useContext, useRef, useState } from "react";


type AdventureContextType = {
    story: string;
    options: string[];
    streamAIResponse: (url: string, payload: any) => Promise<void>;
    reset: () => void;
}


const AdventureContext = createContext<AdventureContextType | undefined>(undefined);

export const AdventureProvider = ({ children }: { children: ReactNode }) => {
    const [story, setStory] = useState<string>("")
    const [options, setOptions] = useState<string[]>([])
    const bufferRef = useRef("");

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

        const reader = response.body?.getReader();
        const decoder = new TextDecoder("utf-8");

        reset()
        let currentTag = ""

        // a switch case to append the correct text to the correct useState


        while (true) {
            const { value, done } = await reader!.read();
            if (done) {
                setOptions((prev) => {
                    const parsedPrev = prev.map(element => {
                        return element.trim()
                    });
                    return parsedPrev
                })
                break;
            }

            const chunk = decoder.decode(value, { stream: true });
            bufferRef.current += chunk;
            console.log({ "currentTag": currentTag });
            console.log({ "currentBuffer": bufferRef.current });


            const tagStart = bufferRef.current.lastIndexOf("<");
            const tagEnd = bufferRef.current.indexOf(">", tagStart);

            if (tagStart !== -1) { // tag start found
                console.log({ "tag start detected!:": bufferRef.current });
                console.log(tagEnd);

                if (tagEnd !== -1) { //tag end also found
                    if (bufferRef.current.includes("<") && bufferRef.current.includes("/>")) {
                        const endTagStart = bufferRef.current.indexOf("<")
                        const endTagEnd = bufferRef.current.indexOf("/>")
                        bufferRef.current = bufferRef.current.slice(0, endTagStart) + bufferRef.current.slice(endTagEnd + 2).trim()
                        continue
                    }
                    currentTag = bufferRef.current.slice(tagStart + 1, tagEnd).trim() //extracting current tag
                    console.log(currentTag);
                    bufferRef.current = bufferRef.current.slice(0, tagStart) + bufferRef.current.slice(tagEnd + 1) // cut away the tag from the buffer
                    const toAppend = bufferRef.current;

                    appendingFunction(toAppend, currentTag) //appending buffer to correct placement
                    bufferRef.current = ""; // buffer cleanup
                } else {
                    continue
                }

            } else {
                // if no tag found, append to correct placement and cleanup as usual
                const toAppend = bufferRef.current;
                appendingFunction(toAppend, currentTag)
                bufferRef.current = "";
            }


        }

    };

    return (
        <AdventureContext.Provider value={{ story, options, streamAIResponse, reset }}>
            {children}
        </AdventureContext.Provider>
    )


}

export const useAdventure = () => {
    const ctx = useContext(AdventureContext);
    if (!ctx) throw new Error("useAdventure must be used inside AdventureProvider")
    return ctx
}