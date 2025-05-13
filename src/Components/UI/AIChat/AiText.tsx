import { useAdventure } from "../../../context/AdventureContext"
import Options from "./Options"


export default function AiText() {
    const { story } = useAdventure()
    return (
        <div className="flex bg-white flex-col h-full grow rounded-2xl justify-center items-center p-6">
            <p className="whitespace-pre-wrap">

                {story}
            </p>
            <Options />
        </div>
    )
}