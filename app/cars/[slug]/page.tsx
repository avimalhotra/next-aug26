import Link from "next/link";

export default async function Cars({ params }) {
  const { slug } = await params;

  //   console.log(slug);

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">{slug} </h1>
      <p>Geting all details for {slug} car</p>
      <Link href="/">Homepage</Link>
    </div>
  );
}
