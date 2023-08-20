import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"



function App() {


  return (
    <>
      <div>
        <div >

        <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
