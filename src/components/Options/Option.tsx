
export type OptionProps = { text: string }


export default function Option({ text }: OptionProps) {
    console.log({ "option": text });

    return (
        <button className="w-full h-full border border-black rounded-2xl cursor-pointer hover:bg-gray-200 transition duration 300 ease-in-out">
            {text}
        </button>
    )
}