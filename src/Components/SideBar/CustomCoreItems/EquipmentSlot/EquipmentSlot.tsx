import { useToolsCoreStore } from "../../../../../stores/useToolsCoreStore"

export default function EquipmentSlot() {
    const slots = useToolsCoreStore(state => state.equipmentSlots)


    return (
        <div>
            {item} removeicon
        </div>
    )


}


