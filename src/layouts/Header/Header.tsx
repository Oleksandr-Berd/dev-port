import * as SC from "./HeaderStyled"

import SocNet from "../../components/SocNet/SocNet";

type Props = {
    status: string | null
}

const Header:React.FC<Props> = ({status}) => {
    return (
      <SC.HeaderStyled status={status ? status : null}>
        <div>
          <SC.HeaderTitle>adamkeyes</SC.HeaderTitle>
          <SocNet />
        </div>
      </SC.HeaderStyled>
    );
}
 
export default Header;