import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tracking from "./pages/Tracking";
import ShipmentRequest from "./pages/ShipmentRequest";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminRoute from "./components/auth/AdminRoute";
import MyShipments from "./pages/MyShipments";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/shipment-request" element={<ShipmentRequest />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/my-shipments" element={<MyShipments />} />
        </Route>
        
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;