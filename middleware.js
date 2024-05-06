import { NextResponse } from "next/server";
import { updateSession } from "./app/lib/basicAuth";
import { auth } from "./auth";

const middleware = async (request) => {
  const isAuthenticated = request.cookies.get("isLoggedIn");
  if (isAuthenticated) {
    return NextResponse.next();
  }
  return (
    (await updateSession(request)) ||
    NextResponse.redirect(new URL("/login", request.url))
  );
};

export { auth, middleware as default };

export const config = {
  matcher: "/",
};
