import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ margin: 20 }}>
      <Contact />
      <Header title="Contact Manager" />
    </div>
  );
}

export default App;
