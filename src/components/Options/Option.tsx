
export type OptionProps = { text: string, handleClick: (choice: string) => void }


export default function Option({ text, handleClick }: OptionProps) {
    // console.log({ "option": text });

    return (
        <button onClick={() => handleClick(text)} className="w-full h-full border border-black rounded-2xl cursor-pointer hover:bg-gray-200 transition duration 300 ease-in-out">
            {text}
        </button>
    )
}