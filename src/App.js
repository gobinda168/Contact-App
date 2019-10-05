import React from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contact/Contacts";
import "./components/contact/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/addContactForm/AddContact";
import ContactState from "./context/contactContext/contactState";

function App() {
  return (
    <ContactState>
      <React.Fragment>
        <Header title="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </React.Fragment>
    </ContactState>
  );
}

export default App;
