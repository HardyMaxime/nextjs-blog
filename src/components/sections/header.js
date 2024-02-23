import RevealWrapper from "../animation/reveal-wrapper";

export default function Header({data})
{
    return (
        <section className="section section-header border border-bottom">
            <div className="section-content container-fluid">
                <RevealWrapper>
                    <hgroup className="heading">
                        <h1 className="heading-main-title reveal-translate" dangerouslySetInnerHTML={{ __html: data.title }} />
                        {data.content &&
                            <div className="heading-description slide-out-in reveal-2" dangerouslySetInnerHTML={{ __html: data.content }} />
                        }
                    </hgroup>
                </RevealWrapper>
            </div>
        </section>
    );
}