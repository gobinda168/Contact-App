import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "Contact Manager"
};
Header.propTypes = {
  tittle: PropTypes.string.isRequired
};
export default Header;
