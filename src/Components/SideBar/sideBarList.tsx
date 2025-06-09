import { useEffect, useState } from "react";
import { useToolsCoreStore, useToolsCoreStoreType } from "../../stores/useToolsCoreStore";
import ToolMenu from "../UI/ToolMenu/ToolMenu";

type sideBarListConfigType = {
    selector: (state: useToolsCoreStoreType) => any[];
    component: React.ComponentType<{ item: any } & Record<string, any>>;
    extraProps?: Record<string, any>;
}

type sideBarListProps = {
    config: sideBarListConfigType;
    menuTypes?: string[]
}

export default function SideBarList({ config, menuTypes }: sideBarListProps) {

    const items: any[] = useToolsCoreStore(config.selector)
    const Component = config.component
    const extraProps = config.extraProps ?? {};

    const [selectedMenu, setSelectedMenu] = useState<string>(menuTypes ? menuTypes[0] : "")

    const shownItemsFilter = () => items.filter((item) => item['type'] === selectedMenu.toLocaleLowerCase())

    const [shownItems, setShownItems] = useState<any[]>(shownItemsFilter())

    const onSelect = (option: string) => {
        setSelectedMenu(option)
    }

    useEffect(() => {
        setShownItems(shownItemsFilter())
    }, [selectedMenu])


    return (
        <>
            {menuTypes && <ToolMenu options={menuTypes} onSelect={onSelect} selected={selectedMenu} />}
            <div className="flex flex-col p-1 divide-y divide-white">

                {(menuTypes ? shownItems : items).map((item, index) => {
                    return (
                        <div key={index} className="flex items-center text-[12px] lg:text-sm justify-between py-2 border-white/50">
                            <Component key={item.id ?? index} item={item} {...extraProps} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}