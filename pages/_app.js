import '../styles/grid.css'
import '../styles/index.css'
import '../styles/theme.css'
import Layout from '../components/layout/Layout'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../redux/reducers'

const store= createStore(
  rootReducer
)

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
       <Layout>
    <Component {...pageProps} />
  </Layout>
    </Provider>
 
   )
}

export default MyApp
