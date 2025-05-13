import { useAdventure } from "../../../context/AdventureContext";
import Option from "./Option";


export default function Options() {
    const { options, streamAIResponse, adventureId, getAdventureInfo } = useAdventure()
    const handleClick = async (choice: string) => {
        await streamAIResponse(`http://localhost:8000/adventure/choice/${adventureId}`, { choice })

        if (adventureId) {

            getAdventureInfo(adventureId)
        }
    }


    return (
        <ul className="flex bg-white shrink-0 flex-col rounded-2xl h-52 mt-6 lg:mx-52 ">
            {options.map((option, i) => {

                return <li className="flex grow" key={i}><Option handleClick={handleClick} text={option} /></li>
            })}
            {/* <li className="flex grow">
                <Option handleClick={handleClick} text="Custom" />
            </li> */}
        </ul>
    )
}