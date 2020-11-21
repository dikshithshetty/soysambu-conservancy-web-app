import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import AddSightingMenu from "./pages/AddSighting/AddSightingMenu/AddSightingMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={Homepage} />
        <Route path="/sightings/add" exact component={AddSightingMenu} />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
