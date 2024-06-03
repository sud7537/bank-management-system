import React from "react"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Nav from "./component/Nav"
import Dp from "./component/Deposit"
import CAcc from "./component/Create"
import Wd from "./component/Withdraw"
import Ft from "./component/Fundtransfer"
import Pin from "./component/pin"
function App()
{
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path="/Home" element={<Home></Home>}/>
  <Route path="/About" element={<About></About>}/>
  <Route path="/Contact" element={<Contact></Contact>}/>
  <Route path="/Ca" element={<CAcc></CAcc>}/>
  <Route path="/Wd" element={<Wd></Wd>}/>
  <Route path="/Dp" element={<Dp></Dp>}/>
  <Route path="/Ft" element={<Ft></Ft>}/>
  <Route path="/pi" element={<Pin></Pin>}/>
  
    </Routes>
    </BrowserRouter>
   
  )

  
}
export default App;