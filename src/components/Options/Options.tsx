import Option, { OptionType } from "./Option"

type OptionsProps = {
    options: OptionType[]
}

export default function Options({options} : OptionsProps) {

    
    return (
            <ul className="flex bg-white shrink-0 rounded-2xl h-52 mt-6 ">
            {options.map((option, i) => <li key={i}><Option text={option.text}/></li>)}
            </ul>
    )
}