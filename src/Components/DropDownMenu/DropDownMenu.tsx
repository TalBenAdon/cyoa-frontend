import { useEffect, useRef, useState } from 'react'
import ArrowIcon from '../../assets/icons/lsicon_up-outline.svg?react'
import DropDownMenuList from './DropDownMenuList'

const options = [
    { id: 'customAction', label: 'Custom action' },
    { id: 'revision', label: 'Revision' }
]

export type Option<T = string> = {
    id: T,
    label: string
}

export default function DropDownMenu() {

    const [isActive, setIsActive] = useState<boolean>(false)
    const [isSelected, setIsSelected] = useState(options[0])
    const menuRef = useRef<HTMLDivElement>(null)

    const handleToggle = () => setIsActive(!isActive)

    const onSelect = (id: string) => {
        const chosen = options.find((option) => option.id === id)
        if (chosen) {
            setIsSelected(chosen)

        }
    }
    console.log(isActive);
    
    

    useEffect(()=>{
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsActive(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    },[])

    return (
        <div className='relative inline-box text-base' ref={menuRef}>
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