import { NextRequest, NextResponse } from "next/server";
import { todoTable, db, } from "@/lib/drizzle";


export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify({message: "Get Request Running "}))
}


export async function POST(request: NextRequest) {

  const body = await request.json();
  console.log("body ", body);
  const data = await db.insert(todoTable).values(body).returning();
    console.log("data ",data);
  return new NextResponse(
    JSON.stringify({
      message: "Data Added",
      data,
    })
  );
}