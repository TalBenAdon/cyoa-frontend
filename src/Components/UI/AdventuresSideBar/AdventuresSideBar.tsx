import { adventuresListType } from "../../../store/useAdventureListsStore"

type adventuresSideBarProps = {
    adventuresList: adventuresListType
}

export default function AdventuresSideBar({ adventuresList }: adventuresSideBarProps) {
    console.log({ "adventuresSideBar": adventuresList });


    return (
        <div className="h-full side-gradient-border p-[1px] rounded-2xl">
            <div className="h-full bg-dark-main rounded-2xl">
                <div className=" flex h-full flex-col px-3 py-4 min-w-48 rounded-2xl items-center shrink-0 side-gradient-bg">
                    <ul className="flex flex-col items-center gap-6">
                        {adventuresList.map((adventure) => {
                            return (
                                <li className="flex w-full" key={adventure.adventureId}>
                                    <button className="cursor-pointer w-full">{adventure.adventureName}</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}