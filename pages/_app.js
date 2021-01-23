import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tarrafa Hackerclub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
