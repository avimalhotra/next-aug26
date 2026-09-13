import Header from "../header";
import Nav from "../Nav";
import Footer from "../footer";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
      title: "Contact Us", 
      description: "This is the Contact page"
}


export default function AboutPage() {

     async function submitForm(formdata:FormData){
          "use server";
          const name=formdata.get("name"), age=formdata.get("age"),email=formdata.get("email");

          console.log(name, age, email);

          // db.studemts.insertOn({name:name,age:age,email:email});

          redirect("/thanks");
          
     }

  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main>
        <h1 className="font-bold text-4xl">Contact Us</h1>

          <form action={submitForm}>
               <label>Name: <input type="text" name="name" required className="border p-2 rounded me-2" /></label>
               <label>Age: <input type="number" name="age" required className="border p-2 rounded me-2" /></label>
               <label>Email: <input type="email" name="email" required className="border p-2 rounded me-2" /></label>
               <button className="border py-2 px-4 rounded cursor-pointer hover:bg-gray-600">Submit</button>
          </form>


      </main>
      <Footer></Footer>
    </div>
  );
}
