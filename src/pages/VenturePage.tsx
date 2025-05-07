import { useEffect, useState } from "react";
import { useAdventure } from "../context/AdventureContext";
import httpClient from "../api/httpClient";
import AiText from "../Components/UI/AIChat/AiText";
import Options from "../Components/UI/AIChat/Options";


type adventureInfo = {
    type: string
    status: number
    history: string[]
}

export default function VenturePage() {
    const { options, streamAIResponse, reset } = useAdventure()
    const [info, setInfo] = useState<adventureInfo>()



    useEffect(() => {
        async function getAdventureInfo() {
            const response = await httpClient.get<adventureInfo>("/adventure/info")
            console.log(response.data);

            setInfo(response.data)
        }

        getAdventureInfo()
    }, [])

    const onStartButtonClick = async () => {
        reset()
        streamAIResponse("http://localhost:8000/adventure/start", { type: "fantasy" })
    }

    return (
        <>
            <AiText />
            {info && options.length == 0 ? <button className="cursor-pointer" onClick={onStartButtonClick}>Click to start</button> : ""}
            {options.length > 0 ? <Options /> : ""}
        </>
    )
}