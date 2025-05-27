import ToolTitleButton from '../ToolTitleButton/ToolTitleButton'
import { useState } from 'react'
import { toolIconMap } from '../../utils/ToolIconsMap'
export default function EquipmentTable() {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const handleTitleClick = () => {
        console.log(isToggled);

        setIsToggled(!isToggled)
    }

    return (
        <div>
            <ToolTitleButton title={"Equipment"} isToggled={isToggled} onClick={handleTitleClick} />

        </div>
    )
}