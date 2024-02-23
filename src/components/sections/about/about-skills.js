import SkillItem from './skills/item';
import RevealTitle from '../../animation/reveal-title';

export default function AboutSkills({skills})
{
    return(
        <div className="section-skills section-about-skills-padding border border-left border-bottom">
            <RevealTitle>
                {skills.title}
            </RevealTitle>
            <ul className="skills-list reset-list">
                {
                    Object.keys(skills.list).map(function(key) {
                        return <SkillItem key={key} logoName={skills.list[key].icon_name} title={skills.list[key].title} >
                            {skills.list[key].description}
                        </SkillItem>
                    })
                }
            </ul>
        </div>
    );
}