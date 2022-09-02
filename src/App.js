import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addresses from "./Components/SuperAdmin/Pages/Addresses";
import {Company as Companylist} from "./Components/SuperAdmin/Pages/Company";
import Vehicles from "./Components/SuperAdmin/Pages/Vehicles";
import Login from "./Components/SuperAdmin/Pages/Login";
import Forgotpas from "./Components/SuperAdmin/Pages/Forgotpas";
import Email from "./Components/SuperAdmin/Pages/Email";
import Dashbaord from "./Components/SuperAdmin/Dashbaord";
import {Login as Complogin} from "./Components/Company/Pages/Login";
import {Forgotpas as Compforgot} from "./Components/Company/Pages/Forgotpas";
import {Dashbaord as Company} from "./Components/Company/Dashbaord";
import { Createcompany } from "./Components/SuperAdmin/Pages/Createcompany";
import ExpertDashboard from "./Components/Expert/ExpertDashboard";
import ClerkDashboard from "./Components/Clerk/ClerkDashboard";
import AuthUser from "./Components/AuthUser";

function App() {
  // const { getToken } = AuthUser();
  // if(!getToken()){
  //   return <Login/>
  // }
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashbaord/>} />
      <Route path="/address" element={<Addresses />} />
      <Route path="/companylist" element={<Companylist />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgotpas />} />
      <Route path="/email" element={<Email />} />
      <Route path="/createcompany" element={<Createcompany />} />

      {/* company dashboard routes  */}
      <Route path="/dashboard/company" element={<Complogin/>} />
      <Route path="/company" element={<Company/>} />
      <Route path="/company/forgot" element={<Compforgot />} />

      {/* Expert Routes */}

      <Route path="/dashboard/expert" element={<ExpertDashboard/>} />

      {/* Expert Routes */}

      <Route path="/dashboard/clerk" element={<ClerkDashboard/>} />


    </Routes>
  );
}

export default App;
