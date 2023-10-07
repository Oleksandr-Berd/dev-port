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
  }
`;

export const SkillsList = styled.ul`
  padding-bottom: 40px;

  border-bottom: 1px solid #979797;
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
`;
