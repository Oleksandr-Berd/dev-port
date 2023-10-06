import * as SC from "./SocNetStyle"

import {ReactComponent as GitHubSVG} from "../../assets/images/icon-github.svg"
import {ReactComponent as FrontEndSvg} from "../../assets/images/icon-frontend-mentor.svg"
import {ReactComponent as LinkSvg} from "../../assets/images/icon-linkedin.svg"
import {ReactComponent as TwitterSvg} from "../../assets/images/icon-twitter.svg"

const SocNet:React.FC = () => {
    return (
      <SC.SocNetList>
        <li>
          <a href="https://github.com/Oleksandr-Berd">
            <GitHubSVG />
          </a>
        </li>
        <li>
          <a href="https://www.frontendmentor.io/profile/Oleksandr-Berd">
            <FrontEndSvg />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/">
            <LinkSvg />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/home">
            <TwitterSvg />
          </a>
        </li>
      </SC.SocNetList>
    );
}
 
export default SocNet;