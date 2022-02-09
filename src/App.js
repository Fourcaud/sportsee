import React from "react";
import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavigatorVertical from "./components/NavigatorVertical";

function App() {
  function Profile() {
    return <h2>Profile</h2>;
  }
  function Setting() {
    return <h2>Setting</h2>;
  }
  function Community() {
    return <h2>Community</h2>;
  }

  return (
    <Router>
      <header>
        <Logo img="../img/logo.png" />
        <Navigator />
      </header>
      <section>
        <NavigatorVertical />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
