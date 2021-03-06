import '../styles/globals.css'
import {MainProvider} from '../src/MainContext'
function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
