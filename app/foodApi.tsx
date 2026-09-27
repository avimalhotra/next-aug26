"use client";
import { useState } from "react";

export default function FoodApp(){

     const [items,setItems]=useState([]);
     const [error,setError]=useState("");
    
     async function searchFood(e){
          e.preventDefault();
          const val=e.target.food.value;
          setItems([]);
          setError("");


          try{
               const x=await fetch(`${process.env.NEXT_PUBLIC_API_URL }?s=${val}`);
               if(!x.ok){ throw new Error(x.status) }
               const y=await x.json();
               
               if(y.meals){ setItems(y.meals) }
               else{ setError("no food found") }
          }
          catch(err){
               setError("api error")
          }

     }


     return (
          <>
          <h2 className="text-3xl font-bold my-3">Food API</h2>
          <form onSubmit={searchFood} className="mb-5">
               <label className="me-3">Food : <input className="border rounded p-2" type="text" name="food" required /> </label>
               <button className="border rounded px-4 py-2 cursor-pointer hover:bg-indigo-800">Search</button>
               <output className="ms-3">{error}</output>
          </form>

          <div className="grid grid-cols-1 grid-cols-2 gap-4">
               {
                    items.map((elem,ind)=>(
                         <section className="border rounded p-3" key={ind}>
                              <h3 className="text-2xl font-bold whitespace-nowrap">{elem.strMeal}</h3>
                              <p>Meal ID: {elem.idMeal}</p>
                              <p>Category: {elem.strCategory}</p>
                              <p>Country: {elem.strCountry}</p>
                         </section>
                    )) 
               }
          </div>
          
          </>
     )
}