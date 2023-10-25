import styled from "@emotion/styled";

type Props = {
  bg1: string;
  bg2: string;
};

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

    @media (min-width: 768px) {
      transform: translateY(412px);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    padding-right: 0;
    padding-left: 32px;
  }

  @media (min-width: 1440px) {
    padding-top: 127px;
    padding-left: 165px;
  }
`;

export const InnerCon = styled.div`
  padding-bottom: 80px;

  border-bottom: 1px solid #979797;

  @media (min-width: 768px) {
    width: 706px;

    padding-bottom: 60px;
  }

  @media (min-width: 1440px){
width: 1110px;

    padding-bottom: 169px;
  }
`;

export const ImageCon = styled.div`
  margin-bottom: 40px;

  text-align: center;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -5;

    padding-top: 71px;

    background-color: #242424;

    @media (min-width: 1440px) {
      padding-top: 0;
      transform: translateX(-165px) translateY(-81px);
    }
  }
`;

export const Greeting = styled.h2`
  font-size: 40px;
  letter-spacing: -1.14px;

  @media (min-width: 768px) {
    /* position: absolute;
    top: 0;
    left: 0; */

    & > span {
      display: inline-block;
      width: 445px;
    }
    width: 445px;

    text-align: left;
    font-size: 72px;
    letter-spacing: -2.05px;
  }

  @media (min-width: 1440px) {
    display: block;
    width: 709px;

    font-size: 88px;
    letter-spacing: -2.5px;

    & > span {
      width: auto;
    }
  }
`;

export const GreenLine = styled.div`
  width: 225px;
  height: 4px;

  margin-left: 86px;
  margin-bottom: 20px;

  background-color: #4ee1a0;

  @media (min-width: 768px) {
    width: 402px;

    margin-left: 0;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    width: 490px;

    margin-left: 135px;
    margin-bottom: 43px;
  }
`;

export const Paragraph = styled.p`
  display: inline-block;

  margin-bottom: 24px;

  line-height: 1.63;
  color: #d9d9d9;

  @media (min-width: 768px) {
    width: 445px;

    margin-bottom: 34px;

    text-align: left;
    font-size: 18px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
    margin-bottom: 66px;
  }
`;

export const ContactLink = styled.a`
  padding-bottom: 10px;

  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.63;
  letter-spacing: 2.29px;

  border-bottom: 1px solid #4ee1a0;

  @media (min-width: 768px) {
    display: inline-block;
    width: 120px;
  }

  @media (min-width: 1440px) {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #4ee1a0;

      transition: color 0.3s ease-in-out;
    }
  }
`;

export const TabletTextCon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
