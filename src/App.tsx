import { Outlet } from "react-router"


function App() {
  //TODO: change background color, and should probably be flex row
  return (
    <main className="flex h-screen bg-dark-main p-6 ">
      <Outlet />
    </main>
  )
}

export default App
