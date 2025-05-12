import { useEffect } from "react";
import { useAdventure } from "../context/AdventureContext";
import AiText from "../Components/UI/AIChat/AiText";
import Options from "../Components/UI/AIChat/Options";





export default function VenturePage() {
    const { options, streamAIResponse, reset, adventureId, getAdventureInfo, getAdventuresIds, idList, adventureInfo } = useAdventure()




    useEffect(() => {

        getAdventuresIds()
    }, [])

    const onStartButtonClick = async () => {
        reset()
        await streamAIResponse("http://localhost:8000/adventure/start", { type: "fantasy" },)

        if (adventureId) {
            getAdventureInfo(adventureId)
        }

        getAdventuresIds()
    }



    return (
        <>
            <AiText />
            {options.length > 0 ? <Options /> : ""}
            {options.length == 0 ? <button className="cursor-pointer" onClick={onStartButtonClick}>Click to start</button> : ""}
            <p>{idList.length}</p>
            {adventureInfo ? <p>scnene num: {adventureInfo.sceneNumber}</p> : "scnene num: 0"}
            {adventureId ? <button className="cursor-pointer" onClick={() => getAdventureInfo(adventureId)}>{adventureId}</button> : "no id"}
        </>
    )
}