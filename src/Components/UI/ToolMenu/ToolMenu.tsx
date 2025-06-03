import React from "react"
import ToolMenuSwitchButton from "../ToolMenuSwitchButton/ToolMenuSwitchButton"

type ToolMenuProps = {
    options: string[]
    selected: string | null
    onSelect: (title: string) => void
}

export default function ToolMenu({ options, selected, onSelect }: ToolMenuProps) {





    return (
        <div className="text-text-base mt-2 flex justify-between items-center">
            {options.map((option, index) => {
                return (
                    <React.Fragment key={option}>

                        <ToolMenuSwitchButton title={option} isToggled={selected} onClick={() => onSelect(option)} />
                        {index != options.length - 1 && <div>|</div>}

                    </React.Fragment>

                )
            }
            )}
        </div>
    )



}