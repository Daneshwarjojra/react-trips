import React from "react";
import "./App.css";
import Table from "./components/table/table";
import TotalTollPaid from "./components/tollpaid/tollPaid";

function App() {
  return (
    <div className="App">
      <Table />
      <TotalTollPaid />
    </div>
  );
}

export default App;
