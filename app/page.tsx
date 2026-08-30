import Link from "next/link";
import Header from "./header";
import Nav from "./Nav";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main>
        <h1 className="font-bold text-4xl">Homepage</h1>
      </main>
      <Footer></Footer>
    </div>
  );
}
