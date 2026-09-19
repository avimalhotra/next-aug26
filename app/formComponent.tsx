"use client";
import { useState } from "react";

export default function FormData(){

     const [form,setForm]=useState({name:"",email:"", age:""});
     const [error,setError]=useState("");

     function changeForm(e){
          setForm({
               ...form,
               [e.target.name]:e.target.value
          });
     }

     async function submitForm(e){
          e.preventDefault();          
          
          if(!e.target.name.value.trim().length){ setError("Invalid Name") }
          else if(!e.target.email.value.trim().length){ setError(" Enter Email") }
          else if( !/[\w]{1,}@[\w]{1,}\.[a-z]{2,}/.test(e.target.email.value) ){ setError("Invalid Email") }
          else if(!e.target.age.value.length){ setError("Invalid Age") }
          else{
               setError("");
               const x=await fetch("/api/login",{method:"POST",body:JSON.stringify({email:form.email})});
               const y=await x.text();
               console.log(y);
          }

     }

     return (
          <form className="my-3" onSubmit={submitForm} noValidate>

                <label className="me-3">Name: <input className="border p-2 rounded" value={form.name} name="name" type="text" onChange={changeForm} required /></label>
                <label className="me-3">Email: <input className="border p-2 rounded" value={form.email} name="email" type="email" onChange={changeForm} required /></label>
                <label className="me-3">Age: <input className="border p-2 rounded" value={form.age} name="age" type="number" onChange={changeForm} min={18} max={35} required /></label>

               <button className="border px-4 py-2 ms-3 rounded">Send</button>
               <output>{error}</output>
               <p>Name: <output>{form.name}</output></p>
               <p>Email: <output>{form.email}</output></p>
               <p>Age: <output>{form.age}</output></p>
          </form>
     )
}