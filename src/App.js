import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Sheru" animal="Dog" breed="INDog" />
      <Pet name="Maxi" animal="Dog" breed="German Shepherd" />
      <Pet name="Ruby" animal="Dog" breed="Pomeranian" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
