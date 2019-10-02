import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contact/Contacts";
import "./components/contact/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./context";
import AddContact from "./components/addContactForm/AddContact";

function App() {
  return (
    <Provider>
      <React.Fragment>
        <Header title="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
