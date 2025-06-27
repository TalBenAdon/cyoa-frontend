
import { useAdventureUIStore } from "../../stores/useAdventureUIStore"
import { useState } from "react"
import Options from "./Options"


export default function AiText() {
    const storyText = useAdventureUIStore(state => state.storyText)
    // const [myText, setMyText] = useState<string>("")
    const [myHeader, setMyHeader] = useState<string>("")

    return (

        <>
            <header className="flex flex-row items-center gap-4">
                <p className="whitespace-nowrap text-2xl" >{myHeader}</p>
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