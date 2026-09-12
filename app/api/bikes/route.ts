import {  NextResponse } from "next/server";

export async function GET() {

     const bikes = [
        { id: 1, name: "Bullet" },
        { id: 2, name: "Pulsar" },
        { id: 3, name: "Passion" }
    ];

     return NextResponse.json(bikes)
}