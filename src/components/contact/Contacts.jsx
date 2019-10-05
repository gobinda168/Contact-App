import React, { useContext } from "react";
import Contact from "./Contact";
import ContactContext from "../../context/contactContext/contactContext";

const Contacts = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <div className="card card-body mb-3">
      {contacts.length > 0 ? (
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)
      ) : (
        <h5>No contacts found</h5>
      )}
    </div>
  );
};

export default Contacts;
