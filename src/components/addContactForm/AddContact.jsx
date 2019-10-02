import React from "react";
import { Formik, Form, Field } from "formik";
import FormError from "./FormError";
import { validationSchema } from "../../validations/formValidation";
const AddContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setInterval(() => {
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name </label>
            <Field
              className={
                touched.name && errors.name
                  ? "form-control is-invalid"
                  : touched.name && !errors.name
                  ? "form-control is-valid"
                  : "form-control"
              }
              type="text"
              name="name"
              id="name"
              value={values.name}
              placeholder="Enter Name: "
            />
            <FormError
              touched={touched.name}
              err={errors.name}
              name={values.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <Field
              className={
                touched.email && errors.email
                  ? "form-control is-invalid"
                  : touched.email && !errors.email
                  ? "form-control is-valid"
                  : "form-control"
              }
              type="email"
              name="email"
              value={values.email}
              id="email"
              placeholder="Enter Email: "
            />
            <FormError
              touched={touched.email}
              err={errors.email}
              name={values.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone </label>
            <Field
              className={
                touched.phone && errors.phone
                  ? "form-control is-invalid"
                  : touched.phone && !errors.phone
                  ? "form-control is-valid"
                  : "form-control"
              }
              type="text"
              name="phone"
              value={values.phone}
              id="phone"
              placeholder="Enter Phone: "
            />
            <FormError
              touched={touched.phone}
              err={errors.phone}
              name={values.phone}
            />
          </div>
          <div className="form-group">
            <button
              disabled={isSubmitting}
              className="btn btn-block btn-success mb-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddContactForm;
