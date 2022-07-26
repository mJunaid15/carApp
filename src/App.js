import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addresses from "./Components/SuperAdmin/Pages/Addresses";
import Vehicles from "./Components/SuperAdmin/Pages/Vehicles";
import Login from "./Components/SuperAdmin/Pages/Login";
import Forgotpas from "./Components/SuperAdmin/Pages/Forgotpas";
import Email from "./Components/SuperAdmin/Pages/Email";
import Dashbaord from "./Components/SuperAdmin/Dashbaord";
import { Createcompany } from "./Components/SuperAdmin/Pages/Createcompany";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashbaord/>} />
      <Route path="/address" element={<Addresses />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgotpas />} />
      <Route path="/email" element={<Email />} />
      <Route path="/createcompany" element={<Createcompany />} />
    </Routes>
  );
}

export default App;
