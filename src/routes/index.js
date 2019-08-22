import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MasterPage from "./master";
import LogoPage from "./logo";
import DenemePage from "./deneme";
//import NotFoundPage from "./notFound";
import GlobalStatePage from "./global";

function App() {
  return (
    <Router>
      <Route path="/" exact component={MasterPage} />
      <Route path="/logo" component={LogoPage} />
      <Route path="/deneme" component={DenemePage} />
      <Route path="/global" component={GlobalStatePage} />
      {/* <Route component={NotFoundPage} /> */}
    </Router>
  );
}

export default App;
