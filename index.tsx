import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Markdown } from "./pages/Markdown";

render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Index} />
      <Route exact={true} path="/markdown" component={Markdown} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
