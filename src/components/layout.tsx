import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col">
      <Header />
      <main className="mt-12 self-center max-w-full">{children}</main>
    </div>
  );
}
