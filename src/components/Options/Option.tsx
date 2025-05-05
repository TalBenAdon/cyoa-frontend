
export type OptionType = { text: string}


export default function Option({text} : OptionType) {
    console.log({"option": text});
    
    return (
        <button>
            {text}
        </button>
    )
}