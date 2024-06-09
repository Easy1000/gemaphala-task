import { prisma } from "@/prisma-client/prisma";

export async function GET(request) {
    const all = await prisma.todoList.findMany()

    console.log(all)

    return Response.json({ all })
}