import { useAdventure } from "../context/AdventureContext";
import AiText from "../Components/UI/AIChat/AiText";
import AdventuresSideBar from "../Components/UI/AdventuresSideBar/AdventuresSideBar";
import { useLoadAdventuresList } from "../hooks/useLoadAdventuresList";
import { useAdventureListsStore } from "../store/useAdventureListsStore";
import { useAIstreamer } from "../hooks/useAIstreamer";






export default function VenturePage() {
    console.log("VenturePage rerendered")
    // const { loading, error } = useLoadAdventuresList()
    const adventuresList = useAdventureListsStore((state) => state.adventuresList)
    const { getStream } = useAIstreamer()

    const onStartButtonClick = async () => {
        getStream({ url: "/adventure/start", payload: { type: "fantasy" } })
    }



    return (

        <div className="flex grow gap-4">


            <AdventuresSideBar adventuresList={adventuresList} />

            < AiText />



            {/* <button className="cursor-pointer" onClick={onStartButtonClick}>Click to start</button> */}

        </div>


    )
}