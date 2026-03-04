import { NextResponse } from "next/server"

import { isRegistryPublic } from "@/config/site"

export function middleware() {
  if (isRegistryPublic) {
    return NextResponse.next()
  }

  return new NextResponse("Not Found", {
    status: 404,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}

export const config = {
  matcher: ["/components/:path*", "/r/:path*"],
}
