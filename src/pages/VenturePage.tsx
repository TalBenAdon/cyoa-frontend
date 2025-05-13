import { useAdventure } from "../context/AdventureContext";
import AiText from "../Components/UI/AIChat/AiText";
import AdventuresSideBar from "../Components/UI/AdventuresSideBar/AdventuresSideBar";
import { useLoadAdventuresList } from "../hooks/loadAdventuresList";
import { useAdventureListsStore } from "../store/useAdventureListsStore";






export default function VenturePage() {
    const { options, streamAIResponse, reset, adventureId, getAdventureInfo } = useAdventure()


    const { loading, error } = useLoadAdventuresList()
    const adventuresList = useAdventureListsStore((state) => state.adventuresList)

    const onStartButtonClick = async () => {
        reset()
        await streamAIResponse("http://localhost:8000/adventure/start", { type: "fantasy" },)

        if (adventureId) {
            getAdventureInfo(adventureId)
        }


    }



    return (
        <div className="flex flex-col grow">
            {loading && <p>loading...</p>}
            {error && <p>error...</p>}
            <div className=" flex grow h-full flex-row">
                <AdventuresSideBar adventuresList={adventuresList} />
                < AiText />


            </div>
            {options.length == 0 ? <button className="cursor-pointer" onClick={onStartButtonClick}>Click to start</button> : ""}
        </div>


    )
}