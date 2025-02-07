import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {


  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
    </>
  )
}

export default App
