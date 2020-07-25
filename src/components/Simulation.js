import React from "react";
import Grid from "./Grid";

function Simulation() {
  return (
    <div className="Simulation">
      <div className="SimulationGenerations">
        <p>Generation: "###"</p>
      </div>
      <Grid />
      <div className="SimulationInitiation">
        <button>Play</button>
        <button>Pause</button>
        <button>Stop</button>
      </div>
    </div>
  );
}

export default Simulation;
