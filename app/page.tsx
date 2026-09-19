import Header from "./header";
import Nav from "./Nav";
import Footer from "./footer";
// import Counter from "./counter";
// import CarsAPI from "./carsapi";
// import FormData from "./formComponent";
import LazyComp from "./lazyComp";
import { Suspense } from "react";
import Loading from "./loading";


export default function Home() {
  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main className="py-3">
        <h2 className="font-bold text-3xl">Homepage</h2>

      <Suspense fallback={<Loading></Loading>}>
          <LazyComp></LazyComp>
      </Suspense>       
       
        
      </main>
      <Footer></Footer>
    </div>
  );
}
