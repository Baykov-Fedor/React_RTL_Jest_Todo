import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import InfoPage from "./pages/InfoPage";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoPage} path="/" exact />
          <Route component={InfoPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
