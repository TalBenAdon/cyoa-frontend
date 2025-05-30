import React, { useState } from "react"
import ToolMenuSwitchButton from "../ToolMenuSwitchButton/ToolMenuSwitchButton"

type ToolMenuProps = {
    options: string[]
}

export default function ToolMenu({ options }: ToolMenuProps) {
    const [isToggled, setIsToggled] = useState<string>('')

    const handleClick = (title: string) => setIsToggled(title)



    return (
        <div className="text-text-base mt-2 flex justify-between items-center">
            {options.map((option, index) => {
                return (
                    <React.Fragment key={option}>

                        <ToolMenuSwitchButton title={option} isToggled={isToggled} onClick={() => handleClick(option)} />
                        {index != options.length - 1 && <div>|</div>}

                    </React.Fragment>

                )
            }
            )}
        </div>
    )



}