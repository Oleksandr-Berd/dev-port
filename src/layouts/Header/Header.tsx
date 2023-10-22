import * as SC from "./HeaderStyled"

import SocNet from "../../components/SocNet/SocNet";
import { useMediaQuery } from "usehooks-ts";

type Props = {
    status: string | null
}

const Header:React.FC<Props> = ({status}) => {

const isMobile = useMediaQuery("(max-width:767px)");

const isTablet = useMediaQuery("(min-width:768px)");

    return (
      <>
        {isMobile ? (
          <SC.HeaderStyled status={status ? status : null}>
            <div>
              <SC.HeaderTitle>adamkeyes</SC.HeaderTitle>
              <SocNet />
            </div>
          </SC.HeaderStyled>
        ) : isTablet ? (
          <SC.HeaderStyled status={status ? status : null}>
            <div>
              <SC.HeaderTitle>adamkeyes</SC.HeaderTitle>
              <SC.TabSocNetCon>
                <SocNet />
              </SC.TabSocNetCon>
            </div>
          </SC.HeaderStyled>
        ) : null}
      </>
    );
}
 
export default Header;