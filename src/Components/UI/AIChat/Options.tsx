
import { useAIstreamer } from "../../../hooks/useAIstreamer";
import { useAdventureCoreStore } from "../../../store/useAdventureCoreStore";
import { useAdventureUIStore } from "../../../store/useAdventureUIStore";
import Option from "./Option";

const placeHolderOptions = [
    "Investigate the Whispering Woods directly. The source of the problem likely lies within, and Master Alatar's words about potent magic intrigue you. This is your chance to prove yourself.",
    "Travel to Oakhaven first. It would be wise to gather more information from the villagers there. They might have more specific clues, and it's always good to understand the plight of those you're trying to help.",
    "Return to your village and consult the elders. Despite their fear, they might possess some forgotten lore about the Woods or similar past events that could be useful. Perhaps there's a safer way.",
    "Spend a day preparing. You could try to brew some potions (a healing draught, perhaps, or one to enhance your senses) and review your more complex spells. The Woods aren't going anywhere.",
]

export default function Options() {

    // const options = useAdventureUIStore(state => state.optionsList)
    const adventureId = useAdventureCoreStore(state => state.currentAdventureId)
    const { getStream } = useAIstreamer()

    const handleClick = (choiceText: string) => {
        getStream({ url: `/adventure/choice/${adventureId}`, payload: { choice: choiceText } })
    }

    return (
        <ul className="flex flex-col gap-2">
            {placeHolderOptions.map((option, i) => {

                return <li className="flex grow" key={i}><Option handleClick={handleClick} text={option} /></li>
            })}
            {/* <li className="flex grow">
                <Option handleClick={handleClick} text="Custom" />
            </li> */}
        </ul>
    )
}