import Nav from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Post from "./components/post/Post";
import post from "./dummyData";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        width: "100vw",
        margin: "0",
        padding:"0"
      }}
    >
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
        {/* <Post post={post} />
        <Post post={post} />
        <Post post={post} />
        <Post post={post} /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
