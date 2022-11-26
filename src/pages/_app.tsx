import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global';
import Navbar from '../components/Navbar';
function App({ Component, pageProps }: AppProps) {
  return (
  <>


  <GlobalStyles/>
  <Navbar/>
  <Component {...pageProps} />
  </>
  )
}

export default App
