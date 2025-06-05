import { useToolsCoreStore, useToolsCoreStoreType } from "../../stores/useToolsCoreStore";
import EquipmentSlot from "./CustomCoreItems/EquipmentSlot/EquipmentSlot";
import InventoryItem from "./CustomCoreItems/InventoryItem/InventoryItem";


type sideBarConfigType = {
    title: string,
    type: 'list' | 'block',
    menuKeys?: string[]
    config: {
        selector: (state: useToolsCoreStoreType) => any[]
        component: React.ComponentType<{ item: any } & Record<string, any>>
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
                const removeEquippedItem = useToolsCoreStore.getState().removeEquippedItem;
                removeEquippedItem(slotId, itemId)
            }
        }
    },
    {
        title: 'Inventory [I]',
        type: 'list',
        menuKeys: ['Equipment', 'use'],
        config: {
            selector: (state: useToolsCoreStoreType) => state.inventoryItems,
            component: InventoryItem,
        },
        extraProps: {
            onEquip: (id: string, itemType: string) => {
                console.log(`adding item ${id} of type ${itemType}`);

            }
        }
    }
]