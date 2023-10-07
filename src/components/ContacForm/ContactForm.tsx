import * as SC from "./ContactFormStyled"

import bg from "../../assets/images/form_bg_mob.svg"

const ContactForm:React.FC = () => {
    return (
      <SC.CommonCon id="contact" bg={bg}>
        <SC.FormTitle>Contact</SC.FormTitle>
        <SC.FormParagraph>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </SC.FormParagraph>
        <SC.FormStyled>
          <SC.InputStyled type="text" placeholder="name" />
          <SC.InputStyled type="text" placeholder="email" />
          <SC.TextAreaStyled name="" placeholder="message"></SC.TextAreaStyled>
          <SC.ButtonCon>
            <SC.SubmitButton>send message</SC.SubmitButton>
          </SC.ButtonCon>
        </SC.FormStyled>
      </SC.CommonCon>
    );
}
 
export default ContactForm;