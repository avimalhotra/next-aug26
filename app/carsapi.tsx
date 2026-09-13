"use client";
import { useState, useEffect } from "react";

export default function CarsAPI(){

     const [data,setData]=useState([]);

     useEffect(()=>{
          async function fetchCars(){
               const res=await fetch("/api/cars",{next:{revalidate:30}});
               const cars=await res.json();   
               setData(cars);
          };
          fetchCars();
     },[]);

     return (
          <>
               <h2 className="font-bold text-2xl">Cars API</h2>
               <table>
                    <thead>
                         <tr>
                              <th className="border p-1">S No</th>
                              <th className="border p-1">Name</th>
                              <th className="border p-1">Body Type</th>
                              <th className="border p-1">Price</th>
                         </tr>
                    </thead>
                    <tbody>
                          {
                              data.map((elem,ind)=>(
                              <tr key={ind}>
                                   <td className="border p-1">{++ind}</td>
                                   <td className="border p-1">{elem.name}</td>
                                   <td className="border p-1">{elem.type}</td>
                                   <td className="border p-1">{elem.price}</td>
                              </tr>
                              ))
                         }
                    </tbody>
               </table>
          </>
     )
}