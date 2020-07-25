import React from "react";

function Settings() {
  return (
    <div className="Settings">
      <h2>Presets</h2>
      <div className="PresetsContainer">
        <button>Preset 1</button>
        <button>Preset 2</button>
        <button>Preset 3</button>
        <button>Preset 4</button>
      </div>
      <h2>Rules</h2>
      <div className="RulesContainer">
        <p>Nostrud enim consectetur do voluptate ex.</p>
        <p>Laboris cillum duis tempor fugiat elit id aute.</p>
        <p>Aute sit ad fugiat est proident.</p>
        <p>Non in aute irure anim sunt voluptate et.</p>
      </div>
    </div>
  );
}

export default Settings;
