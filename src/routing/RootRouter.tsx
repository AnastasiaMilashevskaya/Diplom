import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import { ButtonNav } from "../components/ButtonNav";
import { HomePage } from "../components/HomePage";
import { Navigation } from "../components/Navigation";
import { AboutProject } from "../components/AboutProject";
import { ButtonAdd } from "../components/ButtonAdd";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Modal } from "../components/Modal";
import { Shop } from "../components/Shop";

export function RootRouter() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <AboutProject />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}
