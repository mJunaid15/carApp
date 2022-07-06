import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login/Login';
import Forgotpas from './components/login/Forgotpas';
import Email from './components/login/Email';
import Creatingcompany from './components/Creatingcompany';
import Expertsingleview from './components/Expertsingleview';

function App() {
  return (
    <>

      <Login />
      <Forgotpas />
      <Email />
      <Creatingcompany />
      <Expertsingleview />
    </>
  );
};

export default App;
