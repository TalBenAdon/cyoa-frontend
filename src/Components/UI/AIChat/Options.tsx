
import { useAIstreamer } from "../../../hooks/useAIstreamer";
import { useAdventureCoreStore } from "../../../store/useAdventureCoreStore";
import { useAdventureUIStore } from "../../../store/useAdventureUIStore";
import Option from "./Option";


export default function Options() {

    const options = useAdventureUIStore(state => state.optionsList)
    const adventureId = useAdventureCoreStore(state => state.currentAdventureId)
    const { getStream } = useAIstreamer()

    const handleClick = (choiceText: string) => {
        getStream({ url: `/adventure/choice/${adventureId}`, payload: { choice: choiceText } })
    }

    return (
        <ul className="flex shrink-0 flex-col rounded-2xl h-52 mt-6 lg:mx-52 ">
            {options.map((option, i) => {

                return <li className="flex grow" key={i}><Option handleClick={handleClick} text={option} /></li>
            })}
            {/* <li className="flex grow">
                <Option handleClick={handleClick} text="Custom" />
            </li> */}
        </ul>
    )
}