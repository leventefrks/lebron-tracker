import { GoogleAnalytics } from 'nextjs-google-analytics';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-RELWHFP1MC" />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
