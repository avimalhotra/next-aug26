import Header from "../header";
import Nav from "../Nav";
import Footer from "../footer";
import { Metadata } from "next";
export const metadata: Metadata = {
      title: "Cars Page", 
      description: "This is the cars page"
}

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main>
        {/* <h2 className="font-bold text-3xl">Cars Layout</h2> */}
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
