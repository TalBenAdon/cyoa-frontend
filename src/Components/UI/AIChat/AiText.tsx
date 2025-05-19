import { useAdventureUIStore } from "../../../store/useAdventureUIStore"
import Options from "./Options"


export default function AiText() {
    const storyText = useAdventureUIStore(state => state.storyText)
    return (

        // header hardcoded for now
        <div className="h-full grow gradient-border p-[1px] rounded-2xl">
            <div className="h-full grow bg-dark-main rounded-2xl">
                <div className="flex flex-col h-full text-gradient-bg grow rounded-2xl p-9 items-center p-6">
                    <header className="flex flex-row md:text-2xl">
                        <h1>Returning Home</h1>

                    </header>
                    <p className="whitespace-pre-wrap">
                        {storyText}
                    </p>
                    <Options />
                </div>
            </div>
        </div>


    )
}