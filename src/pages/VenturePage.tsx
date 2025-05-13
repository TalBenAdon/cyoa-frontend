import { useEffect } from "react";
import { useAdventure } from "../context/AdventureContext";
import AiText from "../Components/UI/AIChat/AiText";
import Options from "../Components/UI/AIChat/Options";
import AdventuresSideBar from "../Components/UI/AdventuresSideBar/AdventuresSideBar";





export default function VenturePage() {
    const { options, streamAIResponse, reset, adventureId, getAdventureInfo, idList, adventureInfo } = useAdventure()




    useEffect(() => {


    }, [])

    const onStartButtonClick = async () => {
        reset()
        await streamAIResponse("http://localhost:8000/adventure/start", { type: "fantasy" },)

        if (adventureId) {
            getAdventureInfo(adventureId)
        }


    }



    return (
        <div className="flex flex-row grow">
            <AdventuresSideBar />
            <div className=" flex grow h-full flex-col">
                < AiText />
                {options.length > 0 ? <Options /> : ""}
                {options.length == 0 ? <button className="cursor-pointer" onClick={onStartButtonClick}>Click to start</button> : ""}
                <p>{idList.length}</p>
                {adventureInfo ? <p>scnene num: {adventureInfo.sceneNumber}</p> : "scnene num: 0"}
                {adventureId ? <button className="cursor-pointer" onClick={() => getAdventureInfo(adventureId)}>{adventureId}</button> : "no id"}
            </div>
        </div>


    )
}