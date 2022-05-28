// import '../styles/globals.css';
import '../styles/antd.less';
import type { AppProps } from 'next/app';

// eslint-disable-next-line require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />;
}

export default MyApp;
