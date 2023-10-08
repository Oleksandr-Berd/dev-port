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
  email: Yup.string().email().required("Email is required"),
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
        <SC.InputStyled
          type="text"
          name="name"
          placeholder="name"
          value={formik.values.name}
          onChange={handleChange}
        />
        <SC.InputStyled
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={formik.values.email}
        />
        <SC.TextAreaStyled
          name="message"
          placeholder="message"
          value={formik.values.message}
          onChange={handleChange}
        ></SC.TextAreaStyled>
        <SC.ButtonCon>
          <SC.SubmitButton>send message</SC.SubmitButton>
        </SC.ButtonCon>
      </SC.FormStyled>
    </SC.CommonCon>
  );
};

export default ContactForm;