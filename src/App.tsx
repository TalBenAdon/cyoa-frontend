import { Outlet } from "react-router"


function App() {

  return (
    <main className="flex min-h-screen bg-[#ddb4ab] flex-col p-6 ">
      <Outlet />
    </main>
  )
}

export default App
