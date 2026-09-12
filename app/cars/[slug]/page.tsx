import Link from "next/link";

export default async function Cars({ params }) {
  const { slug } = await params;

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold">{slug}</h2>
      <p>Geting all details for {slug} car</p>
      <Link href="/">Homepage</Link>
    </div>
  );
}
