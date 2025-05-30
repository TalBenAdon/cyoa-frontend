import { useState } from "react"
import ToolTitleButton from "../ToolTitleButton/ToolTitleButton"
import ToolMenu from "../UI/ToolMenu/ToolMenu"

type ToolTable = {
    subMenuOptions?: string[];
    menuTitle: string;
}

export default function ToolTable({ subMenuOptions, menuTitle }: ToolTable) {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const handleTitleClick = () => setIsToggled(!isToggled)

    return (
        <div className='flex flex-col w-full'>
            <ToolTitleButton title={menuTitle} isToggled={isToggled} onClick={handleTitleClick} />


            {subMenuOptions && <ToolMenu options={subMenuOptions} />}

        </div>
    )
}