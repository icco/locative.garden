import Header from "components/Header"
import Layout from "components/Layout"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function Locative({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>locative.garden</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}
