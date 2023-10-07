import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 14px;

  text-align: center;
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
