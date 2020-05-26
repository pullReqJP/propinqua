import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="layout flex flex-col">
      <Header />
      <main className="self-center md:max-w-screen-md lg:max-w-screen-lg m-4 p-4 rounded shadow bg-white">
        {children}
      </main>
    </div>
  );
}
