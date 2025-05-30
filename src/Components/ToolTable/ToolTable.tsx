import { useState } from "react"
import ToolTitleButton from "../ToolTitleButton/ToolTitleButton"
import ToolMenu from "../UI/ToolMenu/ToolMenu"

type ToolTable = {
    subMenuOptions?: string[];
    menuTitle: string;
}

export default function ToolTable({ subMenuOptions, menuTitle }: ToolTable) {

    const [isToggled, setIsToggled] = useState<boolean>(false)
    const [selectedSubMenu, setSelectedSubMenu] = useState<string | null>(null)
    const handleTitleClick = () => setIsToggled(!isToggled)

    return (
        <div className='flex flex-col w-full'>
            <ToolTitleButton title={menuTitle} isToggled={isToggled} onClick={handleTitleClick} />
            {isToggled && (
                <>
                    {subMenuOptions && (
                        <ToolMenu
                            options={subMenuOptions}
                            onSelect={setSelectedSubMenu}
                            selected={selectedSubMenu}
                        />
                    )}


                </>



            )}
        </div>
    )
}