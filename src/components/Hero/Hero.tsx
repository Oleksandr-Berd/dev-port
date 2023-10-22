import * as SC from "./HeroStyled"

import { useMediaQuery } from "usehooks-ts";

import heroImage from "../../assets/images/profile_mobile.svg"
import heroImageTablet from "../../assets/images/hero_tablet.svg"
import bg_mob1 from "../../assets/images/hero_bg_mob1.svg"
import bg_mob2 from "../../assets/images/hero_bg_mob2.svg"
import bg_tab1 from "../../assets/images/hero_bg_tab1.svg"
import bg_tab2 from "../../assets/images/hero_bg_tab2.svg"


const Hero:React.FC = () => {

const isMobile = useMediaQuery("(max-width:767px)");

const isTablet = useMediaQuery("(min-width:768px)");


    return (
      <>
        {isMobile ? (
          <SC.CommonCon bg1={bg_mob1} bg2={bg_mob2}>
            <SC.InnerCon>
              <SC.ImageCon>
                <img src={heroImage} alt="profile_picture" />
              </SC.ImageCon>
              <SC.Greeting>Nice to meet you! I’m Adam Keyes.</SC.Greeting>
              <SC.GreenLine></SC.GreenLine>
              <SC.Paragraph>
                Based in the UK, I’m a front-end developer passionate about
                building accessible web apps that users love.
              </SC.Paragraph>
              <SC.ContactLink href="#contact">contact me</SC.ContactLink>
            </SC.InnerCon>
          </SC.CommonCon>
        ) : isTablet ? (
          <SC.CommonCon bg1={bg_tab1} bg2={bg_tab2}>
            <SC.InnerCon>
              <SC.TabletTextCon>
                <SC.Greeting>
                  Nice to <span>meet you! I’m Adam Keyes.</span>
                </SC.Greeting>
                <SC.GreenLine></SC.GreenLine>
                <SC.Paragraph>
                  Based in the UK, I’m a front-end developer passionate about
                  building accessible web apps that users love.
                </SC.Paragraph>
                <SC.ContactLink href="#contact">contact me</SC.ContactLink>
              </SC.TabletTextCon>
              <SC.ImageCon>
                <img src={heroImageTablet} alt="profile_picture" />
              </SC.ImageCon>
            </SC.InnerCon>
          </SC.CommonCon>
        ) : null}
      </>
    );
}
 
export default Hero;