
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import FormApplications from "./components/Forms/FormApplications";
import EditApplications from "./components/Forms/EditApplications";
import OneCompany from './components/Companies/OneCompany.jsx';

function App() {
  

  return (

    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/applications/:id" component={ApplicationDetails} />  */}
        {/* <Route exact path="/main" component={Main} /> */}
        <Route exact path="/application/create" component={FormApplications}/>
        <Route
          exact
          path="/application/edit/:id"
          component={EditApplications}
        />
        <Route exact path="/company/:id" component={OneCompany}/>
        <Main />

        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
