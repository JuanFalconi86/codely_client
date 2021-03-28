import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Applications from "./components/Applications/Applications";
import Technologies from "./components/Technologies/Technologies"
import ApplicationDetails from "./components/Applications/ApplicationDetails"
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Main from "./pages/Main"
import FormApplications from "./components/Forms/FormApplications"
import EditApplications from "./components/Forms/EditApplications"

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/applications" component={Applications} />
        <Route exact path="/technologies" component={Technologies} /> */}
        <Route exact path="/applications/:id" component={ApplicationDetails} /> 
        <Route exact path="/main" component={Main} />
      {/* <Route exact path="/applications/:id" render={(historyProps) => {
            return <ApplicationDetails {...historyProps} />;
          }}  /> */}
        <Route exact path="/application/create" component={FormApplications} />
        <Route exact path="/application/edit/:id" component={EditApplications} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
