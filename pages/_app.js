import '../styles/grid.css'
import '../styles/index.css'
import '../styles/theme.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return(<Layout>
    <Component {...pageProps} />
  </Layout> )
}

export default MyApp
