import React, { useContext } from "react";
import PropTypes from "prop-types";
import useToggler from "../../hooks/toggle";
import ContactContext from "../../context/contactContext/contactContext";
const Contact = ({ contact }) => {
  const { deleteContact, editContact } = useContext(ContactContext);
  const { id, name, email, phone } = contact;

  const [isOpen, toggle] = useToggler(false);
  const showContact = isOpen ? (
    <ul className="list-group">
      <li className="list-group-item my-1">Email: {email}</li>
      <li className="list-group-item">Phone: {phone}</li>
    </ul>
  ) : (
    ""
  );

  return (
    <div className="card card-body mb-3">
      <h5 className="row">
        <i className="fas fa-id-card" /> {name}{" "}
        <i
          onClick={toggle}
          className="fas fa-sort-down"
          style={{ cursor: "pointer" }}
        ></i>
        <div
          className="ml-auto mr-2 "
          style={{
            display: "flex",
            justifyContent: "spaceBetween"
          }}
        >
          <i
            onClick={() => editContact(contact)}
            className="fas fa-user-edit pr-3"
            style={{ cursor: "pointer", float: "right" }}
          ></i>
          <i
            onClick={() => deleteContact(id)}
            className="fas fa-trash-alt fl"
            style={{ cursor: "pointer", float: "right", marginLeft: "auto" }}
          ></i>
        </div>
      </h5>
      {showContact}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func
};
export default Contact;
