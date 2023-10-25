import styled from "@emotion/styled";

type Props = {
  bg: string;
};

export const CommonCon = styled.div<Props>`
  position: relative;

  padding-top: 40px;
  padding-left: 16px;
  padding-right: 14px;

  text-align: center;

  &:after {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(70px);

    content: url(${(props) => props.bg});

    @media (min-width: 768px) {
      transform: translateY(0px);
    }
  }

  @media (min-width: 768px) {
    padding-top: 52px;
    padding-left: 32px;
    padding-right: 104px;
  }
  @media (min-width: 1440px) {
    padding-top: 72px;
    padding-left: 170px;
    padding-right: 170px;
  }
`;

export const SkillsList = styled.ul`
  padding-bottom: 40px;

  border-bottom: 1px solid #979797;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
    gap: 52px;

    border-bottom: none;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 58px;
  }
`;

export const SkillsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  & > h3 {
    display: inline-block;

    margin-bottom: 1px;

    font-size: 32px;
    line-height: 1.33;
    letter-spacing: -1px;
  }

  & > p {
    line-height: 1.6;
    color: #d9d9d9;
  }

  @media (min-width: 768px) {
    text-align: left;

    & > h3 {
      display: inline-block;

      margin-bottom: 14px;

      font-size: 48px;
      line-height: 1.17;
      letter-spacing: -1.5px;
    }

    & > p {
      font-size: 18px;
      line-height: 1.56;
    }
  }
`;
