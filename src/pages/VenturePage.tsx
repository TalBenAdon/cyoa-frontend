// import { useAdventure } from "../context/AdventureContext";
import AiText from "../Components/AIChat/AiText";
import CustomChatBox from "../Components/CustomChatBox/CustomChatBox";
// import AdventuresSideBar from "../Components/SideBar/SideBar";
// import { useLoadAdventuresList } from "../hooks/useLoadAdventuresList";
// import { useAdventureListsStore } from "../store/useAdventureListsStore";
import { useAIstreamer } from "../hooks/useAIstreamer";








export default function VenturePage() {
    console.log("VenturePage rerendered")
    // const { loading, error } = useLoadAdventuresList()
    // const adventuresList = useAdventureListsStore((state) => state.adventuresList)
    const { getStream } = useAIstreamer()

    const onStartButtonClick = async () => {
        getStream({ url: "/adventure/start", payload: { type: "fantasy" } })
    }



    return (


        <main className=" w-full lg:max-w-5xl flex flex-col items-center h-full flex-grow min-h-full">
            <div className="flex-grow w-full min-h-0 overflow-y-auto background-mask">
                < AiText />
            </div>
            <CustomChatBox/>
        </main>




    )
}