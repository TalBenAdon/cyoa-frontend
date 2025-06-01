import { useSideBarStoreType } from "../../stores/useSideBarStore";
import EquipmentItem from "./ListItem/CustomItem/EquipmentItem/EquipmentItem";
type componentConfig = {
    selector: (state: useSideBarStoreType) => any[]
    component: React.ComponentType<{ item: any }>
}
type sideBarConfigType = {
    title: string,
    type: 'list' | 'block'
    config: componentConfig
}

export const sideBarConfig: sideBarConfigType[] = [
    {
        title: 'Equipment',
        type: 'list',
        config: {
            selector: (state: useSideBarStoreType) => state.equipmentItemsList,
            component: EquipmentItem
        }
    },
]