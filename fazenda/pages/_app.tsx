import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
