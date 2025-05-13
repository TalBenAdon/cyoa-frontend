import { Outlet } from "react-router"


function App() {

  return (
    <main className="flex h-screen bg-[#ddb4ab] p-6 ">
      <Outlet />
    </main>
  )
}

export default App
