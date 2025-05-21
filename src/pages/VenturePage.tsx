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


        <main className="lg:max-w-5xl flex flex-col items-center h-full">
            <div className="overflow-y-auto h-full background-mask">
                < AiText />
            </div>
            <div>

            </div>
        </main>




    )
}