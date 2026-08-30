import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">404</h1>
      <p>Page not found</p>
      <p>
        Go to <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}
