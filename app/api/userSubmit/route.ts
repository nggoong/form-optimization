import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
export async function POST(req: NextRequest) {
  const databody = await req.json();
  console.log(databody);


  return NextResponse.json({status:200, message:"POST success!!"})
}