import RevealTitle from '../animation/reveal-title';
import RevealWrapper from '../animation/reveal-wrapper';
import WorksGrid from './works/grid';
import Link from 'next/link';

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
            <Link href={"mes-projets/"} className='external-link center see-more-works' >
                Découvrir tous mes projets
            </Link>
        </section>
    );
}