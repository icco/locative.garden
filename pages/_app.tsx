/** @jsxImportSource theme-ui */
import Header from "components/Header"
import Layout from "components/Layout"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function Locative({ Component, pageProps }): AppProps {
  return (
    <>
      <Head>
        <title>locative.garden</title>
      </Head>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
