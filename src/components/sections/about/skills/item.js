import RevealWrapper from "../../../../components/animation/reveal-wrapper";

export default function SkillItem({logoName, title, children})
{
    return(
        <li className="skill-item-li" >
            <div className="skill-item">
                <RevealWrapper className="" >
                    <figure className="skill-logo fade-in reveal-2">
                        <svg className="icon">
                            <use xlinkHref={`/images/sprite-logo.svg#${logoName}`} ></use>
                        </svg>
                    </figure>
                </RevealWrapper>
                <RevealWrapper className="skill-content">
                    <h3 className="skill-title reveal-translate reveal-2">
                        {title}
                    </h3>
                    <p className="skill-description slide-out-in reveal-4">
                        {children}
                    </p>
                </RevealWrapper>
            </div>
        </li>
    );
}