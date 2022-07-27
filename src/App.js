import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login/Login';
import Forgotpas from './components/login/Forgotpas';
import Email from './components/login/Email';
import Creatingcompany from './components/Creatingcompany';
import Expertsingleview from './components/Expertsingleview';
import Singleview from './components/Singleview';
import Bellform from './components/Bellform';
import Expertsingleedit from './components/Expertsingleedit';
import Selectuser from './components/Selectuser';
import Singleviewcreate from './components/Singleviewcreate';
import Selectuserexport from './components/Selectuserexport';
import Selectuserclerk from './components/Selectuserclerk';
import Selectusercompanyadmin from './components/Selectusercompanyadmin';
import Creatingvarnish from './components/Vehicles/Creatingvarnish';
import Singlevicompany from './components/Singlevicompany';
import Createevent from './components/Vehicles/Createevent';
import Creatingtries from './components/Vehicles/Creatingtries';

function App() {
  return (
    <>

      <Login />
      <Forgotpas />
      <Email />
      <Creatingcompany />
      <Expertsingleview />
      <Singleview />
      <Singleviewcreate />
      <Singlevicompany />
      <Bellform />
      <Expertsingleedit />
      <Selectuser />
      <Selectuserexport />
      <Selectuserclerk />
      <Selectusercompanyadmin />
      <Creatingvarnish />
      <Createevent />
      <Creatingtries />


    </>
  );
};

export default App;
