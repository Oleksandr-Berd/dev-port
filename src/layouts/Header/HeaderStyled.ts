import styled from "@emotion/styled";

type Props = {
  status: string | null;
};

export const HeaderStyled = styled.header<Props>`
  padding-top: ${(props) => (props.status ? "39px" : "20px")};
  padding-left: 111px;
  padding-right: 111px;
  padding-bottom: ${(props) => (props.status ? "60px" : "0px")};

  & > div {
    text-align: center;
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
`