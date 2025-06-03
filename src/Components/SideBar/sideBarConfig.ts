import { useToolsCoreStore, useToolsCoreStoreType } from "../../stores/useToolsCoreStore";
import EquipmentSlot from "./CustomCoreItems/EquipmentSlot/EquipmentSlot";


type sideBarConfigType = {
    title: string,
    type: 'list' | 'block'
    config: {
        selector: (state: useToolsCoreStoreType) => any[]
        component: React.ComponentType<{ item: any }>
    },
    extraProps?: Record<string, any>
}

export const sideBarConfig: sideBarConfigType[] = [
    {
        title: 'Equipment [E]',
        type: 'list',
        config: {
            selector: (state: useToolsCoreStoreType) => state.equipmentSlots,
            component: EquipmentSlot
        },
        extraProps: {
            onRemove: (slotId: string, itemId: string) => {
                //clearing from slot logic, api, store, for now, still just frontend
                useToolsCoreStore(state => state.equipmentSlots)
            }
        }
    },
]