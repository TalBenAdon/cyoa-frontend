import { useSideBarStore, useSideBarStoreType } from "../../stores/useSideBarStore";

type sideBarListConfigType = {
    selector: (state: useSideBarStoreType) => any[]
    component: React.ComponentType<{ item: any }>
}

type sideBarListProps = {
    config: sideBarListConfigType;
}

export default function sideBarList({ config }: sideBarListProps) {
    const items = useSideBarStore(config.selector)
    const Component = config.component
    return (
        items.map((item, index) => {
            return (
                <Component key={item.id ?? index} item={item} />
            )
        })
    )
}