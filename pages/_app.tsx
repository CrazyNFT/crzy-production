import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@/styles/theme";
import Layout from "@/components/Layout";
import CurrencyContextProvider from "@/context/currencyContext";
import "@/styles/globals.css";

export default function CrzyNFT(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>CrazyNFT</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <CurrencyContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CurrencyContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
