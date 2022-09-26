import { Routes, Route, Link, Navigate } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addresses from "./Components/SuperAdmin/Pages/Address/Addresses";
import {Company as Companylist} from "./Components/SuperAdmin/Pages/Company/Company";
import Vehicles from "./Components/SuperAdmin/Pages/Vehicles/Vehicles";
import Login from "./Components/SuperAdmin/Pages/Login/Login";
import Forgotpas from "./Components/SuperAdmin/Pages/Login/Forgotpas";
import Email from "./Components/SuperAdmin/Pages/Email/Email";
import Dashbaord from "./Components/SuperAdmin/Pages/Dashboard/Dashboard";
import {Login as Complogin} from "./Components/Company/Pages/Login";
import {Forgotpas as Compforgot} from "./Components/Company/Pages/Forgotpas";
import {Dashbaord as Company} from "./Components/Company/Dashbaord";
import { Createcompany } from "./Components/SuperAdmin/Pages/Company/Createcompany";
import ExpertDashboard from "./Components/Expert/ExpertDashboard";
import ClerkDashboard from "./Components/Clerk/ClerkDashboard";
import ProtectedRoutes from "./ProtectedRoute";
import AccessDenied from "./Components/SuperAdmin/Pages/AccessDenied/AccessDenied";


function App() {
  return (
    <Routes>

      <Route path="/denied" element={<AccessDenied />} />
      <Route path="/dashboard" element={<ProtectedRoutes roleRequired="super-admin" Component ={Dashbaord} /> } />
      <Route path="/address" render={()=> <Addresses />} />
      <Route path="/companylist" element={<Companylist />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgotpas />} />
      <Route path="/email" element={<Email />} />
      <Route path="/createcompany" element={<Createcompany />}  />

      {/* company dashboard routes  */}
      <Route path="/dashboard/company" element={<Complogin/>} />
      <Route path="/company" element={<ProtectedRoutes roleRequired="company-admin" Component ={Company} />} />
      <Route path="/company/forgot" element={<Compforgot />} />

      {/* Expert Routes */}

      <Route path="/dashboard/expert" element={<ExpertDashboard/>} />

      {/* Expert Routes */}

      <Route path="/dashboard/clerk" element={<ClerkDashboard/>} />


    </Routes>
  );
}

export default App;
