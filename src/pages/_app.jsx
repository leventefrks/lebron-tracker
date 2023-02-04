import { GoogleAnalytics } from 'nextjs-google-analytics';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews={true} />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
