import { useAdventureUIStore } from "../../../store/useAdventureUIStore"
import Options from "./Options"


export default function AiText() {
    const storyText = useAdventureUIStore(state => state.storyText)
    return (
        <div className="flex bg-white flex-col h-full grow rounded-2xl justify-center items-center p-6">
            <p className="whitespace-pre-wrap">
                {storyText}
            </p>
            <Options />
        </div>
    )
}