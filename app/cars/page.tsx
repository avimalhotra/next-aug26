import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <p>Available Cars</p>
      <ol className="d-flex gap-3">
        <li>
          <Link href="/cars/alto">Alto</Link>
        </li>
        <li>
          <Link href="/cars/baleno">Baleno</Link>
        </li>
        <li>
          <Link href="/cars/brezza">Brezza</Link>
        </li>
        <li>
          <Link href="/cars/swift">Swift</Link>
        </li>
      </ol>
    </>
  );
}
