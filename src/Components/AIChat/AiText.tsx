
import { useAdventureUIStore } from "../../stores/useAdventureUIStore"
import Options from "./Options"


export default function AiText() {
    const storyText = useAdventureUIStore(state => state.storyText)
    const storyTItle = useAdventureUIStore(state => state.storyTitle)


    return (

        <>
            <header className="flex flex-row items-center gap-4">
                <p className="whitespace-nowrap text-2xl" >{storyTItle}</p>
                <div className=" h-[1px] w-full bg-white"></div>
            </header>
            <p className="whitespace-pre-wrap text-start">
                {storyText}
            </p>
            <div className=" h-[1px] w-full bg-white"></div>
            <Options />
        </>
    )
}