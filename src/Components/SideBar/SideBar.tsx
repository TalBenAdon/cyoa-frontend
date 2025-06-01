import EquipmentTable from "../EquipmentTable/EquipmentTable";
import AllRounderTool from "../testComponents/AllRounderTool";
import ToolTable from "../ToolTable/ToolTable";
import ToolTitleButton from "../ToolTitleButton/ToolTitleButton";


export default function SideBar() {




    return (
        <div className="h-full side-gradient-border p-[1px] rounded-2xl">
            <div className="h-full bg-dark-main rounded-2xl">
                <div className=" flex h-full flex-col px-3 py-4 min-w-48 rounded-2xl items-center shrink-0 side-gradient-bg">
                    {/* sideBar.map(config => {
                    return(
                        <>
                        <ToolTitleButton title={config.title}/>
                        if config.type === 'list':
                            <ItemsList config={config}  />
                     
                        </>)
                    }) */}

                    {/* <EquipmentTable />
                    <ToolTable toolType={"inventory"} menuTitle={'Inventory [I]'} subMenuOptions={['Equipment', 'Use']} />
                    <AllRounderTool title={'test'} /> */}
                </div>
            </div>
        </div>
    )
}



// ItemsList(config){
//     const myItems = useItemsStore((state) => state.equipmentItems)
//     const Component = config.component
//     myItems.map(item => {
//         return <Component item={item} />
//     })


// }