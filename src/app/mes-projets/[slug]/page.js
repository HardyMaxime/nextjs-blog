import ProjectLayout from "@/components/projets/layout";
import { Fragment } from "react";
import { extratID } from '../../../helpers';

export const metadata = {
    title: "Mes projets",
    description: 'Description',
    alternates: {
        canonical: '/',
    },
}

export async function generateStaticParams()
{
    const res = await fetch('https://backoffice.mh-temp.com/wp-json/api/v2/projects/paths');
    const paths = await res.json();
    return paths.slug.map((url) => ({
        slug: url
    }))
}

async function getData(slug) {
    const ID = extratID(slug);
    const res = await fetch(`https://backoffice.mh-temp.com/wp-json/api/v2/projects/${ID}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page({params}) {
    const { slug } = params
    const data = await getData(slug) || [];

    return (
        <Fragment>
            <ProjectLayout data={data[Object.keys(data)]} />
        </Fragment>
    );
}
