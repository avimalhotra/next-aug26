import {  NextResponse } from "next/server";

export async function GET() {

     const cars = [
        { id: 1, name: "Swift" },
        { id: 2, name: "Baleno" },
        { id: 3, name: "Alto" }
    ];

     return NextResponse.json(cars)
}