import '../styles/grid.css'
import '../styles/index.css'
import '../styles/theme.css'
import Layout from '../components/layout/Layout'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../redux/reducers'

import {appWithTranslation} from "next-i18next"

const store= createStore(
  rootReducer
)

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
       <Layout >
    <Component {...pageProps} />
  </Layout>
    </Provider>
 
   )
}

export default appWithTranslation(MyApp);
