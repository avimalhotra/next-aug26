import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h2 className="font-bold text-3xl">Available Cars</h2>
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
