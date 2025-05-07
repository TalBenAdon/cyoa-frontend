import { useAdventure } from "../AdventureContext"


export default function AiText() {
    const { story } = useAdventure()
    return (
        <div className="flex bg-white grow rounded-2xl md:h-52 lg:mx-52 justify-center items-center p-6">
            <p className="whitespace-pre-wrap">

                {story}
            </p>

        </div>
    )
}