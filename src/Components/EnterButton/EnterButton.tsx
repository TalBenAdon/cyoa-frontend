import EnterArrow from '../../assets/icons/arrowEnter.svg.svg?react'
import { useAIstreamer } from '../../hooks/useAIstreamer'
export default function EnterButton() {
const {getStream} = useAIstreamer()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        getStream({ url: "/adventure/start", payload: { type: "fantasy" } })
    }

    return (
        <button onClick={handleClick} className="relative h-full aspect-square rounded-full bg-enter-button-base cursor-pointer hover:bg-enter-button-hover">
            <EnterArrow className='absolute inset-0 m-auto w-5 h-5' />
        </button>
    )
}