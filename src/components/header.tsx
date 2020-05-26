import Link from 'next/link';
import B from '../../lib/basepath';

export default function Header() {
  return (
    <header className="flex justify-around p-1 bg-gray-700 text-gray-100 font-pq">
      <Link href={B('/')}>
        <a className="text-current text-3xl">pullReq</a>
      </Link>
    </header>
  );
}
