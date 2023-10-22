import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-top: 80px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-top: 0px;
    padding-left: 30px;
    padding-right: 32px;
    padding-bottom: 100px;
  }
`;

export const TitleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;

  & > h2 {
    font-size: 40px;
    letter-spacing: -1.14px;

    @media (min-width: 768px){
      font-size: 72px;
      letter-spacing: -2.05px;
    }
  }

  & > a {
    padding-bottom: 10px;

    text-transform: uppercase;
    line-height: 1.6;
    letter-spacing: 2.29px;
    font-weight: bold;
    border-bottom: 1px solid #4ee1a0;
  }
`;

export const ImageCon = styled.div`
  margin-bottom: 20px;
`;

export const ProjectTitle = styled.h2`
  display: inline-block;

  margin-bottom: 7px;

  text-transform: uppercase;
  font-size: 24px;
  line-height: 1.33;
`;

export const ProjectsList = styled.ul`
display: flex;
flex-direction: column;

@media (min-width: 768px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 60px;
}
`

export const ProjectsItem = styled.li`
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;

export const TechItem = styled.li`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.56;
  color: #d9d9d9;

  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const LinksCon = styled.div`
  & > a {
    padding-bottom: 10px;

    text-transform: uppercase;
    line-height: 1.6;
    letter-spacing: 2.29px;
    font-weight: bold;

    border-bottom: 1px solid #4ee1a0;
  }

  & > a:not(:last-child) {
    margin-right: 30px;
  }
`;
