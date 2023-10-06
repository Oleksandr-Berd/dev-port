import * as SC from "./HeaderStyled"

import SocNet from "../../components/SocNet/SocNet";

const Header:React.FC = () => {
    return (
      <SC.HeaderStyled>
        <div>
          <SC.HeaderTitle>adamkeyes</SC.HeaderTitle>
          <SocNet />
        </div>
      </SC.HeaderStyled>
    );
}
 
export default Header;