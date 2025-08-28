import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server"

export const POST = async (req)=> {
    const body = await req.json();

    const productCollection = dbConnect(collectionNameObj.productsCollection);
    const result = await productCollection.insertOne(body);
    return NextResponse.json(result)
}