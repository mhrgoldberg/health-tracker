import React from "react";
// import logo from './logo.svg';
import {AppProvider} from "./app_context";
import Navbar from "./components/navbar";
import Grid from "./components/grid/grid"
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <Grid />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </AppProvider>
    </div>
  );
}

export default App;
