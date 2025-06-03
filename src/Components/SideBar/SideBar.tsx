import { Fragment, useState } from "react"
import ToolTitleButton from "../ToolTitleButton/ToolTitleButton"
import { sideBarConfig } from "./sideBarConfig"
import SideBarList from "./SideBarList"


export default function SideBar() {
    let toggleStates: boolean[] = []
    sideBarConfig.forEach(() => toggleStates.push(false))
    const [isToggled, setIsToggled] = useState<boolean[]>(toggleStates)

    const handleOnClick = (index: number) => {

        setIsToggled(prev => {
            const updated = [...prev]
            updated[index] = !updated[index]
            return updated
        })

    }


    return (
        <div className="h-full side-gradient-border p-[1px] rounded-2xl">
            <div className="h-full bg-dark-main rounded-2xl">
                <div className=" flex h-full flex-col px-3 py-4 min-w-48 rounded-2xl items-center shrink-0 side-gradient-bg">
                    <div className='flex flex-col w-full'>

                        {sideBarConfig.map((sideBarItem, index) => {

                            if (sideBarItem.type === 'list') {

                                return (
                                    <Fragment key={index}>
                                        <ToolTitleButton title={sideBarItem.title} isToggled={isToggled[index]} onClick={() => handleOnClick(index)} />
                                        {isToggled[index] && <SideBarList config={{ ...sideBarItem.config, extraProps: sideBarItem.extraProps }} />}
                                    </Fragment>

                                )
                            }

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}



