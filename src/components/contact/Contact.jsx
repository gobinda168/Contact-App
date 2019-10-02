import React from "react";
import PropTypes from "prop-types";
import useToggler from "../../hooks/toggle";
const Contact = ({ contact, deleteContact }) => {
  const { name, email, phone } = contact;
  // const [toggleContact, settoggleContact] = useState(false);

  // const toggleCard = () => {
  //   settoggleContact(!toggleContact);
  //   console.log(toggleContact);
  // };
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
      <h5>
        <i className="fas fa-id-card" /> {name}{" "}
        <i
          onClick={toggle}
          className="fas fa-sort-down"
          style={{ cursor: "pointer" }}
        ></i>
        <i
          onClick={deleteContact}
          className="fas fa-trash-alt fl"
          style={{ cursor: "pointer", float: "right" }}
        ></i>
      </h5>
      {showContact}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};
export default Contact;
