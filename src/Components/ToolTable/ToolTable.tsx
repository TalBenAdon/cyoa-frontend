import { useState } from "react"
import ToolTitleButton from "../ToolTitleButton/ToolTitleButton"
import ToolMenu from "../UI/ToolMenu/ToolMenu"
import { equipmentList, useItemsList } from "../../utils/equipmentSlotsDemo";
type ToolTable = {
    subMenuOptions?: string[];
    menuTitle: string;
    toolType: 'equipment' | 'inventory';
}

export default function ToolTable({ toolType, subMenuOptions, menuTitle }: ToolTable) {

    const [isToggled, setIsToggled] = useState<boolean>(false)
    const [selectedSubMenu, setSelectedSubMenu] = useState<string | null>(subMenuOptions ? subMenuOptions[0] : null)
    const handleTitleClick = () => setIsToggled(!isToggled)






    return (
        <div className='flex flex-col w-full'>
            <ToolTitleButton title={menuTitle} isToggled={isToggled} onClick={handleTitleClick} />
            {isToggled && subMenuOptions && (
                <>
                    <ToolMenu
                        options={subMenuOptions}
                        onSelect={setSelectedSubMenu}
                        selected={selectedSubMenu}
                    />
                    <div className='flex flex-col p-1 divide-y divide-white'>
                        {

                        }

                    </div>
                </>

            )}


        </div>
    )
}