import * as Yup from "yup";
export const validator = {
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Name is Required"),
  cmpName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Company Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  contact: Yup.string()
    .min(10, "It should be 10 numbers!")
    .max(10, "It should be 10 numbers!")
    .required("Contact is Required"),
  country: Yup.string().required("Country is Required"),
  message: Yup.string()
    .max(500, "Your message is too Long")
    .min(30, "Your message is too Short"),
  quantity: Yup.number().min(1).required("Quantity is Required"),
};
