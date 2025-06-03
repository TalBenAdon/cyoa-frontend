import { useToolsCoreStoreType } from "../../stores/useToolsCoreStore";
import EquipmentSlot from "./ListItem/CustomItem/EquipmentItem/EquipmentItem";

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
        title: 'Equipment [E]',
        type: 'list',
        config: {
            selector: (state: useToolsCoreStoreType) => state.equipmentSlots,
            component: EquipmentSlot
        }
    },
]