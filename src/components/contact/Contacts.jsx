import React from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

const Contacts = () => {
  const deleteContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  return (
    <Consumer>
      {value => {
        const { contacts, dispatch } = value;
        return (
          <div className="card card-body mb-3">
            {contacts.length > 0 ? (
              contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteContact={() => deleteContact(contact.id, dispatch)}
                />
              ))
            ) : (
              <h5>No contacts found</h5>
            )}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Contacts;
