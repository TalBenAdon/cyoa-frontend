import { useAdventure } from "../context/AdventureContext";
import AiText from "../Components/UI/AIChat/AiText";
import AdventuresSideBar from "../Components/UI/AdventuresSideBar/AdventuresSideBar";
import { useLoadAdventuresList } from "../hooks/useLoadAdventuresList";
import { useAdventureListsStore } from "../store/useAdventureListsStore";
import { useAIstreamer } from "../hooks/useAIstreamer";
import DropDownMenu from "../Components/UI/DropDownMenu/DropDownMenu";






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

            <div className="h-full grow gradient-border p-[1px] rounded-2xl">
                <div className="h-full grow bg-dark-main rounded-2xl">
                    <div className="flex flex-col items-center h-full text-gradient-bg grow rounded-2xl p-9">
                        <div className="lg:max-w-5xl flex flex-col items-center h-full">

                            <div className="overflow-y-auto h-full background-mask">
                                < AiText />
                            </div>
                            <DropDownMenu />

                        </div>

                    </div>
                </div>
            </div>



            {/* <button className="cursor-pointer" onClick={onStartButtonClick}>Click to start</button> */}

        </div>


    )
}