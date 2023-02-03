import { GoogleAnalytics } from 'nextjs-google-analytics';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return;
  <>
    <GoogleAnalytics trackPageViews />
    <Component {...pageProps} />;
  </>;
};

export default App;
