import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const take = searchParams.get('take') ?? '10'

    const todos = await prisma.todo.findMany({
        take: +take
    });

    return NextResponse.json(todos);
}

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
})

export async function POST(request:Request) {
    try {
        const { complete , description } = await postSchema.validate(await request.json());
   
        const todo = await prisma.todo.create({data: {complete, description}});
    
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(error, {status: 400}) ;
    }


}