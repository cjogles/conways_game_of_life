import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Settings from "./components/Settings";
import Simulation from "./components/Simulation";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="MainContent">
        <section className="SimulationSection">
          <Simulation />
        </section>
        <section className="SettingsSection">
          <Settings />
        </section>
      </div>
      <About />
    </div>
  );
}

export default App;
