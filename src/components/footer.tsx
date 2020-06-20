import Link from 'next/link';
import B from '../../lib/basepath';

export default function Footer() {
  return (
    <footer className="apple-menu bottom-0 h-8 mt-auto py-1 pr-4 font-pq text-right">
      <Link href={B('/privacy_policy')}>
        <a>privacy policy</a>
      </Link>
    </footer>
  );
}
