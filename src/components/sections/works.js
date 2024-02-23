import RevealTitle from '../animation/reveal-title';
import RevealWrapper from '../animation/reveal-wrapper';
import WorksGrid from './works/grid';

export default function Works({data})
{
    return (
        <section className="section section-works">
            <div className="section-content container-fluid">
                <hgroup className="heading">
                    <RevealTitle className='extra-heading' >
                        <span dangerouslySetInnerHTML={{ __html: data.title }} />
                    </RevealTitle>
                    <RevealWrapper className="heading-description">
                        {
                            data.content
                        }
                    </RevealWrapper>
                </hgroup>
                {data.list &&
                    <WorksGrid list={data.list} />
                }
            </div>
        </section>
    );
}