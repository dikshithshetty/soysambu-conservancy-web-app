import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import AddSightingMenu from "./pages/Sightings/AddSightingMenu/AddSightingMenu";
import GiraffeWizardForm from "./pages/Sightings/AddSightingGiraffes/GiraffeWizardForm/GiraffeWizardForm";


const App = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Homepage} />
      <Route path="/sightings/add" exact component={AddSightingMenu} />
      <Route path="/sightings/add/giraffe" exact component={GiraffeWizardForm} />
    </Fragment>
  );
};

export default App;
