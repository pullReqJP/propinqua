import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col">
      <Header />
      <main className="my-8 max-w-full">{children}</main>
      <Footer />
    </div>
  );
}
