import '../styles/globals.css'
import Head from 'next/head'
import NavBar from '../components/NavBar'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tarrafa Hackerclub</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
