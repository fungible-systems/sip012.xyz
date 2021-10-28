import type { AppProps } from 'next/app';
import 'modern-normalize/modern-normalize.css';
import { useFathom } from '../common/use-fathom';

function MyApp({ Component, pageProps }: AppProps) {
  useFathom();
  return <Component {...pageProps} />;
}

export default MyApp;
