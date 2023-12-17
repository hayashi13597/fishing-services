import { NextResponse } from "next/server";

const protectedRoutes = ["/tai-khoan"];

export default function middleware(req: any) {
  let sessionStatus = req.cookies.get("loggedIn");
  if (!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}
