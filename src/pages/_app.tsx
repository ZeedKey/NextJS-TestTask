import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import '../assets/styles/globals.css'

function MyApp({ Component, pageProps } : AppProps ) {
    return <Component {...pageProps} />
  }
  
  MyApp.getInitialProps = async (appContext: AppContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
  
    return { ...appProps }
  }
  
export default MyApp