import Layout from '../features/towers/Layout'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>   
}

export default MyApp;