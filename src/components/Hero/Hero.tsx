import * as SC from "./HeroStyled"

import heroImage from "../../assets/images/profile_mobile.svg"

const Hero:React.FC = () => {
    return (
      <SC.CommonCon>
        <SC.ImageCon>
          <img src={heroImage} alt="profile_picture" />
        </SC.ImageCon>
        <SC.Greeting>Nice to meet you! I’m Adam Keyes.</SC.Greeting>
        <SC.GreenLine></SC.GreenLine>
      </SC.CommonCon>
    );
}
 
export default Hero;