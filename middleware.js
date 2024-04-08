"use server";
import { NextResponse } from "next/server";

export default async function middleware(request) {
  const isAuthenticated = request.cookies.get("isLoggedIn");
  if (isAuthenticated) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};
