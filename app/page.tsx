import Header from "./header";
import Nav from "./Nav";
import Footer from "./footer";
// import Counter from "./counter";
// import CarsAPI from "./carsapi";
import FormData from "./formComponent";
import LazyComp from "./lazyComp";
import { Suspense } from "react";
import Loading from "./loading";
import Image from "next/image";


export default function Home() {

  // console.log( navigator );

  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main className="py-3">
        <h2 className="font-bold text-3xl">Homepage</h2>
        
        {/* <img src="globe.svg" alt="" /> */}
        <Image src="globe.svg" alt="globe" width={100} height={100} loading="eager"/>
        
        <p>Key: { process.env.API_KEY }</p>
        <p>Token: { process.env.SECRET_TOKEN }</p>
        <p>API URL: { process.env.NEXT_PUBLIC_API_URL }</p>

      {/* <Suspense fallback={<Loading></Loading>}>
          <LazyComp></LazyComp>
      </Suspense>        */}

      <hr />
      <FormData></FormData>
        <hr />
         <Image src="window.svg" alt="window" width={150} height={150} loading="lazy" />
      </main>
      <Footer></Footer>
    </div>
  );
}
