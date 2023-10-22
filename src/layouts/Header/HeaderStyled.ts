import styled from "@emotion/styled";

type Props = {
  status: string | null;
};

export const HeaderStyled = styled.header<Props>`
  padding-top: ${(props) => (props.status ? "39px" : "20px")};
  padding-left: 111px;
  padding-right: 111px;
  padding-bottom: ${(props) => (props.status ? "60px" : "0px")};

  @media (min-width: 768px){
    padding-top: 0px;
    padding-left: 30px;
    padding-right: 0px;
  }

  & > div {
    text-align: center;

    @media (min-width: 768px){
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  background-color: ${(props) => (props.status ? "#242424" : "transparent")};
`;

export const HeaderTitle = styled.h1`
display: inline-block;

margin-bottom: 20px;

font-weight: bold;
font-size: 24px;
line-height: 1.33;
letter-spacing: -0.33px;

@media (min-width: 768px){
margin-top: 30px;

  font-size: 32px;
  line-height: 0;
  letter-spacing: -0.44px;
}
`
export const TabSocNetCon = styled.div`
padding-top: 34px;
padding-left: 97px;

background-color: #242424;
`