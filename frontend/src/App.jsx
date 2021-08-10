import Nav from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App" style={{position:"relative",overflowX:"hidden",width:"100vw"}}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
