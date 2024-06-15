import RevealTitle from "../../animation/reveal-title";
import RevealWrapper from "../../animation/reveal-wrapper";

export default function AboutContent({about})
{
    return(
        <div className="section-about section-about-skills-padding border border-bottom">
           <RevealTitle>
                {about.title}
            </RevealTitle>
            <RevealWrapper>
                <div className="content slide-out-in reveal-2">
                    <div className="content-text" dangerouslySetInnerHTML={{ __html: about.content }} />
                </div>
            </RevealWrapper>
        </div>
    );
}