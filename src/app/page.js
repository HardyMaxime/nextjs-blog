import Layout from '../components/page-layout';
import Header from '../components/sections/header';
import AboutWrapper from '../components/sections/about/about-wrapper';
import Works from '../components/sections/works';

async function getData() {
    const res = await fetch(process.env.BACKOFFICE_URL+'pages/8', { next: { revalidate: 10 } });
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

export default async function Home() {
    const data = await getData();

    return (
        <Layout >
            <Header data={data.content.header} />
            <AboutWrapper about={data.content.about} skills={data.content.skills} />
            <Works data={data.content.project} />
        </Layout>
    );
}