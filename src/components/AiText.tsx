type AiTextProps = {
    text: string | undefined
}

export default function AiText({ text }: AiTextProps) {
    return (
        <div className="flex bg-white grow rounded-2xl md:h-52 lg:mx-52 justify-center items-center p-6">

            {text}

        </div>
    )
}