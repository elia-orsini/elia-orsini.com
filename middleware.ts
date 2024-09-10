import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  const [subdomain] = host.split(".");

  if (subdomain === "radio") {
    return NextResponse.rewrite(new URL("/radio", req.url));
  }

  return NextResponse.next();
}
