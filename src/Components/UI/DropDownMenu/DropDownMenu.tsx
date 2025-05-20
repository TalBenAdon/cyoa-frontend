import ArrowIcon from '../../../assets/icons/lsicon_up-outline.svg?react'
const options = {
    customAction: "Custom action",
    revision: "Revision"
}

export default function DropDownMenu() {
    return (
        <button className="bg-button-base cursor-pointer p">
            <p className="text-button-text-base">
                {options.customAction}
            </p>
            <ArrowIcon />
        </button>
    )
}