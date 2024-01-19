import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
           { description: 'algo nuevo', complete: true},
           { description: 'confianza'},
           { description: 'sin miendo al exito'},
           { description: 'lo lograras'},
           { description: 'seras inreconosible'}
        ]
    })

    return NextResponse.json({
        message: 'seed executed'
    })
}