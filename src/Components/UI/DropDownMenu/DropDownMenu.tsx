import { useState } from 'react'
import ArrowIcon from '../../../assets/icons/lsicon_up-outline.svg?react'
import DropDownMenuList from './DropDownMenuList'

const options = [
    { id: 'customAction', label: 'Custom action' },
    { id: 'revision', label: 'Revision' }
]

export type Option<T = string> = {
    id: T,
    label: string
}


// type DropDownMenuProps = {
//     customAction: string,
//     revision: string
// }

export default function DropDownMenu() {

    const [isActive, setIsActive] = useState<boolean>(false)
    const [isSelected, setIsSelected] = useState(options[0])

    const handleToggle = () => setIsActive(!isActive)

    const onSelect = (id: string) => {
        const chosen = options.find((option) => option.id === id)
        if (chosen) {
            setIsSelected(chosen)

        }
    }

    return (
        <div className='relative inline-box text-base'>
            <button className="w-[176px] flex items-center gap-2 bg-button-base cursor-pointer px-4 py-1 rounded-xl" onClick={handleToggle}>
                <p className="text-start whitespace-nowrap text-button-text-base grow">
                    {isSelected.label}
                </p>
                <ArrowIcon className={`${isActive ? "-rotate-180" : ""} duration-100 ease-linear shrink-0`} />
            </button>

            {isActive && (
                <DropDownMenuList options={options} onSelect={onSelect} selectedId={isSelected.id} />
            )}
        </div>
    )
}