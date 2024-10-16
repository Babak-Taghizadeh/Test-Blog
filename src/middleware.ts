import { NextRequest, NextResponse } from "next/server";

// PROTECTING ROUTES FROM UNAUTHORIZED USERS
export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/blogs", "/blogs/:path*", "/api/data"],
};
