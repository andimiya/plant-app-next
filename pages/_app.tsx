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
  );
}
export default App;
