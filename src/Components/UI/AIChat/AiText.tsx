import { useAdventureUIStore } from "../../../store/useAdventureUIStore"
import Options from "./Options"


export default function AiText() {
    const storyText = useAdventureUIStore(state => state.storyText)
    return (


        <div className="h-full grow gradient-border p-[1px] rounded-2xl">
            <div className="h-full grow bg-dark-main rounded-2xl">
                <div className="flex flex-col h-full text-gradient-bg grow rounded-2xl justify-center items-center p-6">
                    <p className="whitespace-pre-wrap">
                        {storyText}
                    </p>
                    <Options />
                </div>
            </div>
        </div>


    )
}