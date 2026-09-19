import Image from "next/image"

export default function Loading() {
  // return <h1 className="text-3xl font-bold text-center">Loading...</h1>;
  return (
        <>
        <h2>Please wait...</h2>
        <Image src="loader.svg" alt="" width={200} height={200} loading="eager" />
        </>
  )
}