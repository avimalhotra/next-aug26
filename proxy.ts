import { NextResponse,NextRequest  } from "next/server";

export function proxy(request: NextRequest) {

  console.log("Middleware executed")
 return NextResponse.next();
}


export const config = {
  matcher: ["/edit/:path*","/dashboard/:path"],
};