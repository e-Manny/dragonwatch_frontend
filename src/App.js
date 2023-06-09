import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

// import pages
import HomePage from "./pages/HomePage";
import Dragons from "./pages/Dragons";
import Analysts from "./pages/Analysts";
import EditAnalyst from "./pages/EditAnalyst";
import AddAnalyst from "./pages/AddAnalyst";
import Volunteers from "./pages/Volunteers";
import Sizes from "./pages/Sizes";
import Dragon_Confirmed_Sightings from "./pages/DCS";
import Confirmed_Sightings from "./pages/CS";
import Observations from "./pages/Observations";
import ObservationsDesc from "./pages/ObservationsDesc";

function App() {
  const [analyst, setAnalyst] = useState([]);
  return (
    <>
      <main>
        <Router>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/dragons">
            <Dragons />
          </Route>

          <Route path="/analysts">
            <Analysts setAnalyst={setAnalyst} />
          </Route>

          <Route path="/edit-analyst">
            <EditAnalyst analyst={analyst} />
          </Route>

          <Route path="/add-analyst">
            <AddAnalyst analyst={analyst} />
          </Route>

          <Route path="/volunteers">
            <Volunteers />
          </Route>

          <Route path="/sizes">
            <Sizes />
          </Route>

          <Route path="/dcs">
            <Dragon_Confirmed_Sightings />
          </Route>

          <Route path="/cs">
            <Confirmed_Sightings />
          </Route>

          <Route path="/observations">
            <Observations />
          </Route>

          <Route path="/od">
            <ObservationsDesc />
          </Route>
        </Router>
      </main>
    </>
  );
}

export default App;
