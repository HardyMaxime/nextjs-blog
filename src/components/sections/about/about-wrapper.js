import AboutContent from './about-content';
import AboutSkills from './about-skills';

export default function AboutWrapper({about, skills})
{
    return (
        <section className="section section-about-skills">
            <AboutContent about={about} />
            <AboutSkills skills={skills} />
        </section>
    );
}