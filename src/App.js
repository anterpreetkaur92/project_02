import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Signup from "./components/Signup";
import ResetPassword from './components/ResetPassword';
import Portfolio from './components/Portfolio';
import Summary from './components/Summary';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/resetpassword" component={ResetPassword}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/summary" component={Summary}/>
        </Switch>
    </Router>
      );
}

export default App;
