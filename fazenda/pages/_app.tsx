import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        
        <title> Fazenda </title>
        <meta lang='pt-BR'/>
        <meta name="description" content="Fazenda da Titi"/>        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
