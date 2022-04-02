import { Route, Routes } from "react-router-dom";
import "./App.css";
import Address from "./Components/Address/Address";
import NavBar from "./Components/NavBar/NavBar";
import Payment from "./Components/Payment/Payment";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </div>
  );
}

export default App;
