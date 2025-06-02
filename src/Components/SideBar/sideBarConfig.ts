import { useToolsCoreStoreType } from "../../stores/useToolsCoreStore";
import EquipmentItem from "./ListItem/CustomItem/EquipmentItem/EquipmentItem";
type componentConfig = {
    selector: (state: useToolsCoreStoreType) => any[]
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
            selector: (state: useToolsCoreStoreType) => state.equipmentItemsList,
            component: EquipmentItem
        }
    },
]