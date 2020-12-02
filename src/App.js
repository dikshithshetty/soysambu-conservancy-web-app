import React, { Fragment } from "react";
import SlideRoutes from "react-slide-routes";
import { Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import AddSightingMenu from "./pages/AddSighting/AddSightingMenu/AddSightingMenu";
import AddSightingGiraffe from "./pages/AddSighting/AddSightingGiraffe/AddSightingGiraffe";

const App = () => {
  let location = useLocation();
  return (
    <Fragment>
      <Route path="/" exact component={Homepage} />
      <SlideRoutes location={location} duration={300}>
        <Route path="/sightings/add" exact component={AddSightingMenu} />
        <Route path="/sightings/add/giraffe" exact component={AddSightingGiraffe} />
      </SlideRoutes>
    </Fragment>
  );
};

export default App;
