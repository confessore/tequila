import { NextResponse } from "next/server";
import { Tequila, tequilas } from "@/lib/tequilas";

export async function GET(request: Request) {
    const random = Math.floor(Math.random() * tequilas.length);
    return NextResponse.json(tequilas[random]);
}