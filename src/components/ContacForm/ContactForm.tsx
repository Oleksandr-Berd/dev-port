import * as Yup from "yup";
import { useFormik } from "formik";
import { ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";


import * as SC from "./ContactFormStyled";

import bg from "../../assets/images/form_bg_mob.svg";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "A name can't be so short")
    .required("Name is required"),
  email: Yup.string().email("Sorry, invalid format").required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be more than 10 symbols")
    .required("Message is required"),
});

const ContactForm: React.FC = () => {
  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    formik.handleChange(evt);
  };

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(formik.errors.name || formik.errors.email || formik.errors.message){
      toast.error(
        `Please, fill all the fields properly`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else {
toast.success(
  `${formik.values.name}, Your message is sent and will be considered ASAP! `,
  {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }
);
    }

   
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });



  return (
    <SC.CommonCon id="contact" bg={bg}>
      <ToastContainer />
      <SC.FormTitle>Contact</SC.FormTitle>
      <SC.FormParagraph>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </SC.FormParagraph>
      <SC.FormStyled onSubmit={handleSubmit}>
        <SC.InputCon>
          <SC.InputStyled
            type="text"
            name="name"
            placeholder="name"
            value={formik.values.name}
            onChange={handleChange}
            status={
              formik.errors.name === "A name can't be so short"
                ? "error"
                : formik.values.name.length > 1
                ? "success"
                : null
            }
          />
          {formik.errors.name === "A name can't be so short" ? (
            <SC.InputError>{formik.errors.name}</SC.InputError>
          ) : (
            <SC.InputError style={{ opacity: "0" }}>
              just empty space
            </SC.InputError>
          )}
        </SC.InputCon>
        <SC.InputCon>
          <SC.InputStyled
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={formik.values.email}
            status={
              formik.errors.email === "Sorry, invalid format"
                ? "error"
                : formik.values.email.length > 1
                ? "success"
                : null
            }
          />
          {formik.errors.email === "Sorry, invalid format" ? (
            <SC.InputError>{formik.errors.email}</SC.InputError>
          ) : (
            <SC.InputError style={{ opacity: "0" }}>
              just empty space
            </SC.InputError>
          )}
        </SC.InputCon>
        <SC.InputCon>
          <SC.TextAreaStyled
            name="message"
            placeholder="message"
            value={formik.values.message}
            onChange={handleChange}
            status={
              formik.errors.message === "Message should be more than 10 symbols"
                ? "error"
                : formik.values.message.length > 10
                ? "success"
                : null
            }
          ></SC.TextAreaStyled>
          {formik.errors.message ===
          "Message should be more than 10 symbols" ? (
            <SC.InputError>{formik.errors.message}</SC.InputError>
          ) : (
            <SC.InputError style={{ opacity: "0" }}>
              just empty space
            </SC.InputError>
          )}
        </SC.InputCon>
        <SC.ButtonCon>
          <SC.SubmitButton>send message</SC.SubmitButton>
        </SC.ButtonCon>
      </SC.FormStyled>
    </SC.CommonCon>
  );
};

export default ContactForm;
