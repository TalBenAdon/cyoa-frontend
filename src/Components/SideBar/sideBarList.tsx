import { useToolsCoreStore, useToolsCoreStoreType } from "../../stores/useToolsCoreStore";

type sideBarListConfigType = {
    selector: (state: useToolsCoreStoreType) => any[]
    component: React.ComponentType<{ item: any }>
}

type sideBarListProps = {
    config: sideBarListConfigType;
}

export default function SideBarList({ config }: sideBarListProps) {

    const items = useToolsCoreStore(config.selector)
    const Component = config.component

    return (
        <div className="flex flex-col p-1 divide-y divide-white">

            {items.map((item, index) => {
                return (
                    <div className="flex items-center text-[12px] lg:text-sm justify-between py-2 border-white/50">
                        <Component key={item.id ?? index} item={item} />
                    </div>
                )
            })}
        </div>
    )
}