import { createContext, useContext, useState } from "react";
import Context from "./Context";
import Home from "./Components/Home";

function App() {

  const state = useState({
    hour: 0,
    day: 166,
    file: 1
  })

  return (
    <Context.Provider value={state}>
      <Home />
    </Context.Provider>
  );
}

export default App;
