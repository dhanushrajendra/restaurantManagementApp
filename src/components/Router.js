import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./Store";
import RestaurantApp from "./RestaurantApp";
import RouteNotFound from "./RouteNotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Store} />
      <Route path="/store/:storeId" component={RestaurantApp} />
      <Route component={RouteNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
