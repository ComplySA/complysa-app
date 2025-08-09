import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const s = document.createElement('script')
      s.src = '/register-sw.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#2A00FF" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
