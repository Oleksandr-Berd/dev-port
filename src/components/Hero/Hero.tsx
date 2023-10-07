import * as SC from "./HeroStyled"

import heroImage from "../../assets/images/profile_mobile.svg"

const Hero:React.FC = () => {
    return (
      <SC.CommonCon>
        <SC.InnerCon>
          <SC.ImageCon>
            <img src={heroImage} alt="profile_picture" />
          </SC.ImageCon>
          <SC.Greeting>Nice to meet you! I’m Adam Keyes.</SC.Greeting>
          <SC.GreenLine></SC.GreenLine>
          <SC.Paragraph>
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </SC.Paragraph>
          <SC.ContactLink href="#">contact me</SC.ContactLink>
        </SC.InnerCon>
      </SC.CommonCon>
    );
}
 
export default Hero;