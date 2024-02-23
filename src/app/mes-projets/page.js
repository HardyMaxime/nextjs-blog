import Layout from '../../components/page-layout';
import RevealWrapper from '@/components/animation/reveal-wrapper';
import RevealTitle from '@/components/animation/reveal-title';
import WorksGrid from '@/components/sections/works/grid';

export const metadata = {
    title: "Mes projets",
    description: 'Description',
    alternates: {
        canonical: '/',
    },
}

async function getData() {
    const res = await fetch('https://backoffice.mh-temp.com/wp-json/api/v2/pages/60', {  });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page() {
    const data = await getData();
    return (
        <Layout title="Mes projets" description="Ma superbe description" >
             <section className="section section-works">
                <div className="section-content container-fluid">
                    <hgroup className="heading">
                        <RevealTitle className='extra-heading' >
                            <span dangerouslySetInnerHTML={{ __html: data.content.header.title }} />
                        </RevealTitle>
                        <RevealWrapper className="heading-description">
                            {
                                data.content.header.content
                            }
                        </RevealWrapper>
                    </hgroup>
                    {data.content.list &&
                        <WorksGrid list={data.content.list} />
                    }
                </div>
            </section>
        </Layout>
    );
}
