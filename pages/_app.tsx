import Header from "components/Header"
import Layout from "components/Layout"
import Theme from "components/Theme"
import type { AppProps, NextWebVitalsMetric } from "next/app"
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

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric: NextWebVitalsMetric) {
  const body = JSON.stringify(metric)
  const url = "https://reportd.natwelch.com/analytics/locative"

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: "POST", keepalive: true })
  }
}
