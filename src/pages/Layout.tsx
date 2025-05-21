import { Outlet } from "react-router";
import AdventuresSideBar from "../Components/UI/AdventuresSideBar/AdventuresSideBar";

export default function Layout() {
    return (
        <div className="flex h-screen bg-dark-main text-white p-4">

            <div className="flex grow gap-4">

                <AdventuresSideBar />

                <div className="h-full grow gradient-border p-[1px] rounded-2xl">
                    <div className="h-full grow bg-dark-main rounded-2xl">
                        <div className="flex flex-col items-center h-full text-gradient-bg grow rounded-2xl p-9">


                            <Outlet />

                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}