import * as SC from "./ProjectsStyled"

import project1 from "../../assets/images/proj1_mob.svg"
import project2 from "../../assets/images/proj2_mob.svg";
import project3 from "../../assets/images/proj3_mob.svg";
import project4 from "../../assets/images/proj4_mob.svg";
import project5 from "../../assets/images/proj5_mob.svg";
import project6 from "../../assets/images/proj6_mob.svg";

const Projects = () => {
    return (
      <SC.CommonCon>
        <SC.TitleCon>
          <h2>Projects</h2>
          <a href="#contact">contact me</a>
        </SC.TitleCon>
        <SC.ProjectsList>
          <SC.ProjectsItem>
            <SC.ImageCon>
              <img src={project1} alt="project_one" />
            </SC.ImageCon>
            <SC.ProjectTitle>design portfolio</SC.ProjectTitle>
            <SC.TechList>
              <SC.TechItem>html</SC.TechItem>
              <SC.TechItem>css</SC.TechItem>
            </SC.TechList>
            <SC.LinksCon>
              <a href="https://github.com/Oleksandr-Berd">view project</a>
              <a href="https://github.com/Oleksandr-Berd">view code</a>
            </SC.LinksCon>
          </SC.ProjectsItem>
          <SC.ProjectsItem>
            <SC.ImageCon>
              <img src={project2} alt="project_two" />
            </SC.ImageCon>
            <SC.ProjectTitle>e-learning landing page</SC.ProjectTitle>
            <SC.TechList>
              <SC.TechItem>html</SC.TechItem>
              <SC.TechItem>css</SC.TechItem>
            </SC.TechList>
            <SC.LinksCon>
              <a href="https://github.com/Oleksandr-Berd">view project</a>
              <a href="https://github.com/Oleksandr-Berd">view code</a>
            </SC.LinksCon>
          </SC.ProjectsItem>
          <SC.ProjectsItem>
            <SC.ImageCon>
              <img src={project3} alt="project_three" />
            </SC.ImageCon>
            <SC.ProjectTitle>todo web app</SC.ProjectTitle>
            <SC.TechList>
              <SC.TechItem>html</SC.TechItem>
              <SC.TechItem>css</SC.TechItem>
              <SC.TechItem>javascript</SC.TechItem>
            </SC.TechList>
            <SC.LinksCon>
              <a href="https://github.com/Oleksandr-Berd">view project</a>
              <a href="https://github.com/Oleksandr-Berd">view code</a>
            </SC.LinksCon>
          </SC.ProjectsItem>
          <SC.ProjectsItem>
            <SC.ImageCon>
              <img src={project4} alt="project_four" />
            </SC.ImageCon>
            <SC.ProjectTitle>entertainment web app</SC.ProjectTitle>
            <SC.TechList>
              <SC.TechItem>html</SC.TechItem>
              <SC.TechItem>css</SC.TechItem>
              <SC.TechItem>javascript</SC.TechItem>
            </SC.TechList>
            <SC.LinksCon>
              <a href="https://github.com/Oleksandr-Berd">view project</a>
              <a href="https://github.com/Oleksandr-Berd">view code</a>
            </SC.LinksCon>
          </SC.ProjectsItem>
          <SC.ProjectsItem>
            <SC.ImageCon>
              <img src={project5} alt="project_five" />
            </SC.ImageCon>
            <SC.ProjectTitle>memory game</SC.ProjectTitle>
            <SC.TechList>
              <SC.TechItem>html</SC.TechItem>
              <SC.TechItem>css</SC.TechItem>
              <SC.TechItem>javascript</SC.TechItem>
            </SC.TechList>
            <SC.LinksCon>
              <a href="https://github.com/Oleksandr-Berd">view project</a>
              <a href="https://github.com/Oleksandr-Berd">view code</a>
            </SC.LinksCon>
          </SC.ProjectsItem>
          <SC.ProjectsItem>
            <SC.ImageCon>
              <img src={project6} alt="project_six" />
            </SC.ImageCon>
            <SC.ProjectTitle>art gallery showcase</SC.ProjectTitle>
            <SC.TechList>
              <SC.TechItem>html</SC.TechItem>
              <SC.TechItem>css</SC.TechItem>
              <SC.TechItem>javascript</SC.TechItem>
            </SC.TechList>
            <SC.LinksCon>
              <a href="https://github.com/Oleksandr-Berd">view project</a>
              <a href="https://github.com/Oleksandr-Berd">view code</a>
            </SC.LinksCon>
          </SC.ProjectsItem>
        </SC.ProjectsList>
      </SC.CommonCon>
    );
}
 
export default Projects;