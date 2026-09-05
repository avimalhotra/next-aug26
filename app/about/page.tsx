import Header from "../header";
import Nav from "../Nav";
import Footer from "../footer";
import { Metadata } from "next";

export const metadata: Metadata = {
      title: "About Page", 
      description: "This is the About page"
}


export default function AboutPage() {
  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main>
        <h1 className="font-bold text-4xl">About Us</h1>
      </main>
      <Footer></Footer>
    </div>
  );
}
