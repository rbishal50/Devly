import { NextResponse } from "next/server";

import tickets from "@/app/database";

export async function GET() {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const { name, status, type } = await request.json();
  tickets.push({
    id: tickets.length + 1,
    name,
    status,
    type,
  });
  return NextResponse.json(tickets);
}
