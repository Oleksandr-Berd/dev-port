import * as SC from "./SkillsStyled"

import bg from "../../assets/images/skill_bg_mob.svg"

const Skills:React.FC = () => {
    return (
      <SC.CommonCon bg={bg}>
        <SC.SkillsList>
          <SC.SkillsItem>
            <h3>HTML</h3>
            <p>4 Years Experience</p>
          </SC.SkillsItem>
          <SC.SkillsItem>
            <h3>CSS</h3>
            <p>4 Years Experience</p>
          </SC.SkillsItem>
          <SC.SkillsItem>
            <h3>Javascript</h3>
            <p>4 Years Experience</p>
          </SC.SkillsItem>
          <SC.SkillsItem>
            <h3>Accessibility</h3>
            <p>4 Years Experience</p>
          </SC.SkillsItem>
          <SC.SkillsItem>
            <h3>React</h3>
            <p>3 Years Experience</p>
          </SC.SkillsItem>
          <SC.SkillsItem>
            <h3>Sass</h3>
            <p>3 Years Experience</p>
          </SC.SkillsItem>
        </SC.SkillsList>
      </SC.CommonCon>
    );
}
 
export default Skills;