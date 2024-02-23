import Layout from '../components/page-layout';
import Header from '../components/sections/header';
import AboutWrapper from '../components/sections/about/about-wrapper';
import Works from '../components/sections/works';


export const metadata = {
    title: "Accueil",
    description: 'Description',
    alternates: {
        canonical: '/',
    },
}

async function getData() {
    const res = await fetch('https://backoffice.mh-temp.com/wp-json/api/v2/pages/8', { cache: 'force-cache' });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Home() {
    const data = await getData();

    return (
        <Layout title="Accueil" description="Ma superbe description" >
            <Header data={data.content.header} />
            <AboutWrapper about={data.content.about} skills={data.content.skills} />
            <Works data={data.content.project} />
        </Layout>
    );
}