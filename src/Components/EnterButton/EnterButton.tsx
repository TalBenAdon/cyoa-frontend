import EnterArrow from '../../assets/icons/arrowEnter.svg.svg?react'
export default function EnterButton() {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
    }

    return (
        <button onClick={handleClick} className="relative h-full aspect-square rounded-full bg-enter-button-base cursor-pointer hover:bg-enter-button-hover">
            <EnterArrow className='absolute inset-0 m-auto w-5 h-5' />
        </button>
    )
}