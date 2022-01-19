import Header from "components/Header"
import Layout from "components/Layout"
import Theme from "components/Theme"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "theme-ui"

export default function Locative({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Head>
          <title>locative.garden</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
