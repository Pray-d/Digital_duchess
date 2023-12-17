import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import RHDepartment from './components/RHDepartment';
import ITDepartment from './components/ITDepartment';
import MarketingDepartment from './components/MarketingDepartment';
import Team from './components/Team';
import EmployeeProfile from './components/EmployeeProfile';
import ChatBot from './components/ChatBot';
import EventPlanning from './components/EventPlanning';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/rh" component={RHDepartment} />
        <Route path="/it" component={ITDepartment} />
        <Route path="/marketing" component={MarketingDepartment} />
        <Route path="/team/:employeeId" component={Team} />
        <Route path="/employee/:employeeId" component={EmployeeProfile} />
        <Route path="/chatbot" component={ChatBot} />
        <Route path="/planning-events" component={EventPlanning} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
