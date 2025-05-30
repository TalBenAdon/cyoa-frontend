import ToolTitleButton from '../ToolTitleButton/ToolTitleButton'
import fallBackIcon from '../../assets/icons/StateGloves.svg?react'
import { useState } from 'react'
import { toolIconMap } from '../../utils/toolIconMap'
import ToolItemSlot from '../UI/ToolItemColumn/ToolItemColumn'
import { equipmentSlotsDemo } from '../../utils/equipmentSlotsDemo'

export default function EquipmentTable() {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const handleTitleClick = () => setIsToggled(!isToggled)

    const onActionClick = (id: string) => {

        console.log('removingItem');

    }

    return (
        <div className='flex flex-col w-full'>
            <ToolTitleButton title={"Equipment [E]"} isToggled={isToggled} onClick={handleTitleClick} />
            {isToggled && (<div className='flex flex-col p-1 divide-y divide-white'>
                {

                    equipmentSlotsDemo.map((equipmentSlot) => {
                        const Icon = toolIconMap[equipmentSlot.type] ?? fallBackIcon
                        return (<ToolItemSlot
                            key={equipmentSlot.id}
                            Icon={Icon}
                            item={equipmentSlot.item}
                            actionType='remove'
                            onActionClick={onActionClick} />)
                    })
                }

            </div>)}
        </div>
    )
}