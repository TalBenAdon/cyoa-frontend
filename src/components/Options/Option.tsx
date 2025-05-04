
export type OptionType = {
    text : string
}

export default function Option({text}: OptionType) {
    return (
        <button>
            {text}
        </button>
    )
}