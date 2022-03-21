import Head from 'next/head';

import '../styles/reset.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <style global jsx>{`
                :root {
                    margin: 0;
                    overflow-x: hidden;
                    padding: 0;
                    scroll-behavior: smooth;

                    --primary-color: #08325a;
                    --site-width: 1200px;
                }
            `}</style>
            <Head>
                <title>North Central Florida PBA</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
