import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import 'normalize.css/normalize.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/webflow.css';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const start = () => {
  //     console.log("start");
  //     setLoading(true);
  //   };
  //   const end = () => {
  //     console.log("finished");
  //     setLoading(false);
  //   };
  //   // Router.events.on("routeChangeStart", start);
  //   // Router.events.on("routeChangeComplete", end);
  //   // Router.events.on("routeChangeError", end);
  //   // return () => {
  //   //   Router.events.off("routeChangeStart", start);
  //   //   Router.events.off("routeChangeComplete", end);
  //   //   Router.events.off("routeChangeError", end);
  //   // };
  // }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Layout>
          <div>
            <Component {...pageProps} />
          </div>
        </Layout>
      )}
    </>
    // <Layout>
    //   {loading ? <h1>Loading...</h1> : <Component {...pageProps} />}
    // </Layout>
  );
}
export default App;
