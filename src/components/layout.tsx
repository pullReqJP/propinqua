import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col">
      <Header />
      {children}
    </div>
  );
}
