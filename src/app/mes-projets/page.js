import Layout from '../../components/page-layout';
import RevealWrapper from '@/components/animation/reveal-wrapper';
import RevealTitle from '@/components/animation/reveal-title';
import WorksGrid from '@/components/sections/works/grid';

async function getData() {
    const res = await fetch(process.env.BACKOFFICE_URL+'pages/59', {  });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function generateMetadata({ params }) {
    const data = await getData();
    return {
        title: data.seo.title,
        description: data.seo.meta_description,
        alternates: {
            canonical: "/",
        },
        robots: {
            index: data.seo.robots.index,
            follow:data.seo.robots.follow,
        },
        openGraph: {
            title: data.seo.open_graph_title,
            description: data.seo.open_graph_description,
            url: 'https://maximehardy.me',
            siteName: data.seo.site_name,
            images: [
            ],
            publishedTime: data.seo.open_graph_article_published_time,
            modifiedTime: data.seo.open_graph_article_modified_time,
            locale: data.seo.open_graph_locale,
            type: data.seo.open_graph_type,
            schema: data.seo.schema
        },
        twitter: {
            card: data.seo.twitter_card,
            title: data.seo.twitter_title,
            description: data.seo.twitter_description,
            siteId: data.seo.twitter_site,
            creator: data.seo.twitter_creator,
            images: data.seo.twitter_image,
          },
    };
};

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
