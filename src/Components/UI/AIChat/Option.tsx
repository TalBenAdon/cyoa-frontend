
export type OptionProps = { text: string, handleClick: (choiceText: string) => void }


export default function Option({ text, handleClick }: OptionProps) {
    // console.log({ "option": text });

    return (
        <button onClick={() => handleClick(text)} className="flex text-start px-4 py-2 p w-full h-full border border-black rounded-xl cursor-pointer hover:bg-gray-200 transition duration 300 ease-in-out">
            {text}
        </button>
    )
}