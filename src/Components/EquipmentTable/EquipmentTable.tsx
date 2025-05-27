import DropTriangle from '../../assets/icons/dropDownTriangle.svg?react'
export default function EquipmentTable() {

    return (
        <div>
            <button className='flex items-center gap-2 cursor-pointer'>
                <DropTriangle className='w-3 h-3' />
                <p className="text-text-base">Equipment</p>
            </button>
        </div>
    )
}