import styled from "@emotion/styled";

type Props = {
    bg1: string,
    bg2: string,
}

export const CommonCon = styled.div<Props>`
  position: relative;

  padding-top: 49px;
  padding-left: 16px;
  padding-right: 16px;

  text-align: center;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -5;

    content: url(${(props) => props.bg1});
  }

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(162px);

    content: url(${(props) => props.bg2});
  }
`;


export const InnerCon = styled.div`
  padding-bottom: 80px;

  border-bottom: 1px solid #979797;
`;

export const ImageCon = styled.div`
  margin-bottom: 40px;

  text-align: center;
`;

export const Greeting = styled.h2`
  font-size: 40px;
  letter-spacing: -1.14px;
`;

export const GreenLine = styled.div`
  width: 225px;
  height: 4px;

  margin-left: 86px;
  margin-bottom: 20px;

  background-color: #4ee1a0;
`;

export const Paragraph = styled.p`
  display: inline-block;

  margin-bottom: 24px;

  line-height: 1.63;
  color: #d9d9d9;
`;

export const ContactLink = styled.a`
  padding-bottom: 10px;

  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.63;
  letter-spacing: 2.29px;

  border-bottom: 1px solid #4ee1a0;
`;
