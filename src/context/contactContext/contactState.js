import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import uuid from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  EDIT_CONTACT,
  CLEAR_CONTACT
} from "../keys";
const ContactState = props => {
  const initialState = {
    updatedContact: null,
    contacts: [
      {
        id: 1,
        name: "Gobinda Das",
        email: "gobinda168@gmail.com",
        phone: "9957507223"
      },
      {
        id: 2,
        name: "Bhaskar Das",
        email: "bhaskar090@gmail.com",
        phone: "9957507223"
      },
      {
        id: 3,
        name: "Gourango Das",
        email: "gouranga@gmail.com",
        phone: "9957507223"
      },
      {
        id: 4,
        name: "Milan Das",
        email: "milan@gmail.com",
        phone: "9957507223"
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };
  const editContact = contact => {
    dispatch({
      type: EDIT_CONTACT,
      payload: contact
    });
  };
  const clearContact = () => {
    dispatch({ type: CLEAR_CONTACT });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        updatedContact: state.updatedContact,
        addContact,
        deleteContact,
        updateContact,
        editContact,
        clearContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
