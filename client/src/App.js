import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import ActiveTicket from "./pages/ActiveTicket";
import Contact from "./pages/Contacts";
import CreateTicket from "./pages/CreateTicket";
import Clients from "./pages/AdminClients";
import Projects from "./pages/AdminProjects";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        {/* Ravi's Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/sign-in" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/services" component={Services} />
        {/* Jeff's Routes */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/create-tickets" component={CreateTicket} />
        <Route exact path="/active-tickets" component={ActiveTicket} />
        <Route exact path="/contacts" component={Contact} />
        {/* Meena's Routes */}
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  )}

export default App;