import React from "react";
import Navbar from "./component/Navbar";
import Homepage from "./page/Homepage";
import Workpage from "./page/Workpage";
import {
  Switch,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
      <Switch>
        <Route path="/mywork" >
          <Navbar />
          <Workpage/>
        </Route>
        <Route path="/">
          <Navbar />
          <Homepage/>
        </Route>
      </Switch>

  );
}

export default App;
