import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="flex justify-around p-1 bg-gray-700 text-gray-100 font-pq">
        <div className="text-current text-3xl">pullReq</div>
      </header>
      <main className="m-4 p-4 rounded shadow bg-white">
        {children}
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </main>
    </div>
  );
}
