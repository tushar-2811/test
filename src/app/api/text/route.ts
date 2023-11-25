import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'




export async function GET(request: NextRequest){
       try {
         const Users = await prisma.user.findMany();

         return NextResponse.json({
            ok : true,
            users : Users
         } , {status : 201})
        
       } catch (error) {
         console.log(error);
         return NextResponse.json({
            ok : false,
            error
         },{status : 401})
       }
}