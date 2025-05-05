
export type OptionProps = { text: string }


export default function Option({ text }: OptionProps) {
    console.log({ "option": text });

    return (
        <button>
            {text}
        </button>
    )
}