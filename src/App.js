import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login/Login';
import Forgotpas from './components/login/Forgotpas';
import Email from './components/login/Email';
import Dashboard from './components/login/Dashboard';
import Creatingcomp from './components/Creatingcomp';
import Addresses from './components/Addresses';


function App() {
  return (
    <>

      <Login />
      <Forgotpas />
      <Email />
      <Dashboard />
      <Creatingcomp />
      <Addresses />
    </>
  );
};

export default App;
