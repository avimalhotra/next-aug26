import Header from "../header";
import Nav from "../Nav";
import Footer from "../footer";

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
        <h1 className="font-bold text-4xl">Cars Layout</h1>
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
