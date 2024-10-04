import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/blogs"];


export default function middleware(req: NextRequest) {
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}