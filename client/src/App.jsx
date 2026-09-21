import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tracking from "./pages/Tracking";
import ShipmentRequest from "./pages/ShipmentRequest";
import Navbar from "./components/Navbar";  
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/shipment-request' element={<ShipmentRequest />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;