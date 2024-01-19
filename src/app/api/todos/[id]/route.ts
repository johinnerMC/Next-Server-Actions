import prisma from "@/lib/prisma";
import * as yup from "yup";
import { NextResponse } from "next/server";
import { Todo } from "@prisma/client";

interface Segments {
    params: {
        id: string
    }
}

const getTodo = async(id: string):Promise<Todo | undefined> => {

    const todo = await prisma.todo.findFirst({where: {id}})

    if(!todo) { return undefined } 

    return todo
}

export async function GET(request: Request, {params}: Segments) {


    // const todo = await prisma.todo.findFirst({where: {id: params.id}})
    const todo = await getTodo(params.id)

    if(!todo) {
        return NextResponse.json({
            message: 'algo salio mal'
        }, {status: 400})
    } 

    return NextResponse.json({
        todo
    })
}


const postSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
})

export async function PUT(request: Request, {params}: Segments) {


    //const todo = await prisma.todo.findFirst({where: {id: params.id}})
    const todo = await getTodo(params.id)

    if(!todo) {
        return NextResponse.json({
            message: 'algo salio mal'
        }, {status: 400})
    } 

    try {

        const {complete, description} = await postSchema.validate(await request.json());

        const updatedTodo = await prisma.todo.update({
            where: {id: params.id},
            data: { complete, description }
        })
    
        return NextResponse.json({
            updatedTodo
        })
        
    } catch (error) {
        return NextResponse.json({
            error
        }, {status: 400})
    }

   
}