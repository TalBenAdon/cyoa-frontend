import EquipmentTable from "../EquipmentTable/EquipmentTable";
import AllRounderTool from "../testComponents/AllRounderTool";
import ToolTable from "../ToolTable/ToolTable";


export default function SideBar() {



    return (
        <div className="h-full side-gradient-border p-[1px] rounded-2xl">
            <div className="h-full bg-dark-main rounded-2xl">
                <div className=" flex h-full flex-col px-3 py-4 min-w-48 rounded-2xl items-center shrink-0 side-gradient-bg">
                    {/* <EquipmentTable />
                    <ToolTable toolType={"inventory"} menuTitle={'Inventory [I]'} subMenuOptions={['Equipment', 'Use']} /> */}
                    <AllRounderTool title={'test'} />
                </div>
            </div>
        </div>
    )
}