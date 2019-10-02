import React from "react";

const FormError = ({ touched, name, err }) => {
  if (touched === false)
    return (
      <small className="form-text text-danger">
        {name} field can't be blank
      </small>
    );
  if (touched && err)
    return <small className="form-text text-danger">{err}</small>;
  return touched && !err ? (
    <small className="form-text text-success">
      Awesome{" "}
      <span role="img" aria-label="icon">
        🤘
      </span>{" "}
    </small>
  ) : (
    <p></p>
  );
};

export default FormError;
