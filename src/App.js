import { Route, Routes } from "react-router-dom";
import "./App.css";
import Address from "./Components/Address/Address";
import DashBoard from "./Components/DashBoard/DashBoard";
import NavBar from "./Components/NavBar/NavBar";
import Payment from "./Components/Payment/Payment";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </div>
  );
}

export default App;
