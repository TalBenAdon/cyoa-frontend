import { type Option } from "./DropDownMenu"


type DropDownMenuListProps = {
    options: Option[],
    onSelect: (id: string) => void
    selectedId: string
}

export default function DropDownMenuList({ options, onSelect, selectedId }: DropDownMenuListProps) {


    return (
        <div className="w-[176px] absolute bottom-10 flex flex-col gap-1 bg-button-base p-1 rounded-lg">
            {options.map(option => (
                <button key={option.id}
                    className={` ${option.id === selectedId ? 'bg-button-active' : 'bg-button-menu hover:bg-button-hover'} rounded-lg py-1`}
                    onClick={() => onSelect(option.id)}>

                    <p>
                        {option.label}
                    </p>
                </button>
            ))}
        </div>
    )
}