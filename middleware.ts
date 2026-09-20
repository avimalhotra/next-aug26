import { NextResponse,NextRequest  } from "next/server";

export function middleware(request: NextRequest) {

  console.log("Middleware executed")
 return NextResponse.next();

//   if( new Date().getHours()>15 ){ 
//      return NextResponse.next();
//   }
  
//   return NextResponse.redirect(new URL("/login", request.url));

}


export const config = {
  matcher: ["/edit/:path*","/dashboard/:path"],
};