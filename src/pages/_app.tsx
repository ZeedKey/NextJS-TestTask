import App from 'next/app'
import '../assets/styles/globals.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
  
    return { ...appProps }
  }
  
export default MyApp