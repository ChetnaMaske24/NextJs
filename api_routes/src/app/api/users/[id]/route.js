import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content){
    const userData = user.filter((items) => items.id == content.params.id)
    return NextResponse.json(userData,{status:200})
}