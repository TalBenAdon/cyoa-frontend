import { useState } from "react"
import ToolTitleButton from "../ToolTitleButton/ToolTitleButton"

export default function InventoryTable() {
    const [isToggled, setIsToggled] = useState<boolean>(false)

    const handleTitleClick = () => setIsToggled(!isToggled)

    return (
        <div className='flex flex-col w-full'>
            <ToolTitleButton title={"Inventory [I]"} isToggled={isToggled} onClick={handleTitleClick} />

            <div className="text-text-base mt-2 flex justify-between items-center">
                <button className="basis-1/2 hover:underline">
                    <p className="text-[12px] lg:text-xs">Equipment</p>
                </button>
                <div>|</div>
                <button className="basis-1/2 hover:underline">
                    <p className="text-[12px] lg:text-xs">Use</p>
                </button>
            </div>
        </div>
    )
}