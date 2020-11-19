import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

const App = (props) => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={Homepage} />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
