import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must have at least 3 charecter")
    .max(255, "Name is too long")
    .required("You must enter a name"),
  email: Yup.string()
    .email("Enter a valid email")
    .max(255, "Email is too long")
    .required("You must enter a email"),

  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .required()
});
