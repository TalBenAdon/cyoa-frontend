import { adventuresListType } from "../../../store/useAdventureListsStore"

type adventuresSideBarProps = {
    adventuresList: adventuresListType
}

export default function AdventuresSideBar({ adventuresList }: adventuresSideBarProps) {
    console.log({ "adventuresSideBar": adventuresList });


    return (
        <div className="flex h-full flex-col px-3 py-4 bg-white min-w-48 mr-6 rounded-2xl items-center shrink-0">
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
    )
}