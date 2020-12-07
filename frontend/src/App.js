import React, { Fragment } from "react";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Homepage from "./pages/Homepage/Homepage";
import AddSightingMenu from "./pages/AddSighting/AddSightingMenu/AddSightingMenu";
import AddSightingGiraffe from "./pages/AddSighting/Giraffe/AddSightingGiraffe/AddSightingGiraffe";
import GiraffeCount from "./pages/AddSighting/Giraffe/GiraffeCount/GiraffeCount";

const App = () => {
  let location = useLocation();
  return (
    <Fragment>
      <Route path="/" exact component={Homepage} />
      <SlideRoutes
        location={location}
        duration={300}
        pathList={["/sightings/add", "/sightings/add/giraffe", "/sightings/add/giraffe-count"]}
      >
        <Route path="/sightings/add" exact component={AddSightingMenu} />
        <Route path="/sightings/add/giraffe" exact component={AddSightingGiraffe} />
        <Route path="/sightings/add/giraffe-count" exact component={GiraffeCount} />
      </SlideRoutes>
    </Fragment>
  );
};

export default App;
