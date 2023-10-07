import * as SC from "./HeroStyled"

import heroImage from "../../assets/images/profile_mobile.svg"
import bg_mob1 from "../../assets/images/hero_bg_mob1.svg"
import bg_mob2 from "../../assets/images/hero_bg_mob2.svg"

const Hero:React.FC = () => {
    return (
      <SC.CommonCon bg1={bg_mob1} bg2={bg_mob2}>
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
          <SC.ContactLink href="#contact">contact me</SC.ContactLink>
        </SC.InnerCon>
      </SC.CommonCon>
    );
}
 
export default Hero;