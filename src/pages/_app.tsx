import '@/styles/reset.css';
import '@/styles/custom.css';
import "animate.css/animate.compat.css";
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
