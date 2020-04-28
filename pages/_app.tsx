import React from 'react';
import '../css/tailwind.css';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import { withRedux } from '../redux/redux';


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>aviato</title>
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
    </Head>
    <div className="bg-gray-100">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </>
)

/*
  TODO: Need to no do this at the app level, needs to be on a per page instance,
  currently breaks next static optimization
*/
export default withRedux(MyApp);

