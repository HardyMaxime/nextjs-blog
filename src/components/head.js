import Head from 'next/head'

export default function PageHead({title, description = ""}) {
  return (
    <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex" />
    </Head>
  );
}
