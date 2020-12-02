import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import AddSightingMenu from "./pages/AddSighting/AddSightingMenu/AddSightingMenu";
import AddSightingGiraffe from "./pages/AddSighting/AddSightingGiraffe/AddSightingGiraffe";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={Homepage} />
        <Route path="/sightings/add" exact component={AddSightingMenu} />
        <Route path="/sightings/add/giraffe" exact component={AddSightingGiraffe} />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
