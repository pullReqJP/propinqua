import { AppProps } from 'next/app';
import './tailwind.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
