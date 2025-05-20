
export type OptionProps = { text: string, handleClick: (choiceText: string) => void }


export default function Option({ text, handleClick }: OptionProps) {
    // console.log({ "option": text });

    return (
        <button onClick={() => handleClick(text)} className=" text-start px-4 py-2 p w-full h-full border border-[oklch(0.3291_0.0289_192.36)] rounded-xl cursor-pointer option-gradient-bg">
            <p className="flex justify-center">
                {text}
            </p>
        </button>
    )
}