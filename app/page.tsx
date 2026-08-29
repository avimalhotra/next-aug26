import Link from "next/link";

export default function Home() {
  return (
      <div className="container mx-auto px-3">
          <h1 className="font-bold text-5xl">Hello Next JS</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
      </div>
  );
}
