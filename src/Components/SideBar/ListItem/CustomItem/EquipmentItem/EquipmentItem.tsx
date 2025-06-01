type EquipmentItemProps = {
    item: string
}
export default function EquipmentItem({ item }: EquipmentItemProps) {


    return (
        <div>
            {item}
        </div>
    )
}