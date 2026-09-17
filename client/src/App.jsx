import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tracking from "./pages/Tracking";
import ShipmentRequest from "./pages/ShipmentRequest";
import Navbar from "./components/Navbar";  

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/shipment-request' element={<ShipmentRequest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;