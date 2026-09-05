import Header from "./header";
import Nav from "./Nav";
import Footer from "./footer";
import Counter from "./counter";

export default function Home() {
  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main className="py-3">
        <h2 className="font-bold text-3xl">Homepage</h2>
        <Counter></Counter>
        
      </main>
      <Footer></Footer>
    </div>
  );
}
