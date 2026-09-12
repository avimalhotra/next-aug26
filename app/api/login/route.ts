import {  NextResponse } from "next/server";

export async function POST(request) {

     try{
          const body = await request.json();
          console.log(body);
          return NextResponse.json({ message: "User added successfully"});
     }
     catch(err){
          return NextResponse.json({ error: "ERROR FOUND" }, { status: 400 });
     }
    
}