"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Counter(){
     const [counter,setCounter]=useState(0);
     const router=useRouter();

     function toAbout(){
          router.push("/about");
     }

     return (
         <>
          <h3>Counter</h3>
          <button onClick={()=>setCounter(counter+1)} className="bg-red-700 text-white px-4 py-2 rounded cursor-pointer">Click</button>
          <output className="ms-3">{counter}</output>
          <hr className="my-3" />
          <button onClick={toAbout} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Next</button>
         </>
     )

}