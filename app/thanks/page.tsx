import Header from "../header";
import Nav from "../Nav";
import Footer from "../footer";
import { Metadata } from "next";

export const metadata: Metadata = {
      title: "Thanks Page", 
      description: "This is the Thanks page"
}


export default function ThanksPage() {
  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main>
        <h1 className="font-bold text-4xl">Thanks</h1>
        <p>Our Team will get back to you</p>
      </main>
      <Footer></Footer>
    </div>
  );
}
