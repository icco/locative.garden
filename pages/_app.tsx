import Head from "next/head"

export default function Locative({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>locative.garden</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
