import { useAdventureUIStore } from "../../../store/useAdventureUIStore"
import Options from "./Options"


export default function AiText() {
    const storyText = useAdventureUIStore(state => state.storyText)
    return (

        // header hardcoded for now
        <div className="h-full grow gradient-border p-[1px] rounded-2xl">
            <div className="h-full grow bg-dark-main rounded-2xl">
                <div className="flex flex-col items-center h-full text-gradient-bg grow rounded-2xl p-9">
                    <div className="lg:max-w-5xl">
                        <header className="flex flex-row md:text-xl font-normal items-center gap-4">
                            <p className="whitespace-nowrap" >Leaving home</p>
                            <div className=" h-[1px] w-full bg-white"></div>
                        </header>
                        <p className="whitespace-pre-wrap">
                            You, Elara, a young wizard with a knack for elemental magic but still much to learn, find yourself standing at the edge of the Whispering Woods. For weeks, tales have reached your village of strange occurrences within: livestock disappearing, eerie lights seen dancing between the ancient trees, and unsettling whispers that seem to carry on the wind, promising power or madness in equal measure. The village elders, wary and fearful, have forbidden anyone from entering.

                            But you're not just anyone. Your mentor, the old and wise Master Alatar, before he disappeared under mysterious circumstances a year ago, often spoke of the Woods as a place of potent, raw magic – a place where a keen student could learn much, if they were brave enough to face its dangers. He also left you with a cryptic warning: "Not all whispers speak the truth, and not all power is worth the price."

                            A missive arrived this morning, not from your village, but from the neighboring hamlet of Oakhaven, further down the river. It was a desperate plea. Their well has gone dry, not in a natural way, but suddenly, as if the water itself was stolen. They offer a modest reward for anyone who can discover the cause and restore their water source. They suspect the strange happenings in the Whispering Woods might be connected.

                            You clutch your Oaken staff, its tip still slightly blackened from a misfired fire spell last week. The weight of your spellbook in your satchel is a comforting presence. The path into the shadowed woods beckons, cool and silent.You, Elara, a young wizard with a knack for elemental magic but still much to learn, find yourself standing at the edge of the Whispering Woods. For weeks, tales have reached your village of strange occurrences within: livestock disappearing, eerie lights seen dancing between the ancient trees, and unsettling whispers that seem to carry on the wind, promising power or madness in equal measure. The village elders, wary and fearful, have forbidden anyone from entering.

                            But you're not just anyone. Your mentor, the old and wise Master Alatar, before he disappeared under mysterious circumstances a year ago, often spoke of the Woods as a place of potent, raw magic – a place where a keen student could learn much, if they were brave enough to face its dangers. He also left you with a cryptic warning: "Not all whispers speak the truth, and not all power is worth the price."
                        </p>
                        <div className=" h-[1px] w-full bg-white"></div>
                        <Options />
                    </div>
                </div>
            </div>
        </div>


    )
}