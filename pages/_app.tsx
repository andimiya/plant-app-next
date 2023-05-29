import React from "react";
import type { AppProps } from "next/app";
import { ConfigProvider, theme } from "antd";
import Layout from "./components/Layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const { darkAlgorithm, compactAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{
        algorithm: [darkAlgorithm, compactAlgorithm],
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
export default App;
