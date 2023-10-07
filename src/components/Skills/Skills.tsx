import * as SC from "./SkillsStyled"

const Skills:React.FC = () => {
    return (
      <SC.CommonCon>
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