import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cars">Cars</Link>
        </li>
      </ul>
    </nav>
  );
}
