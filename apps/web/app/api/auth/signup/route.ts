import { NextRequest, NextResponse } from "next/server";
import { safeParse } from "zod";
import { signupSchema } from "@/lib/validation/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    const body = await req.json
    const result = signupSchema.safeParse(body) 

    if (!result.success) {
        return NextResponse.json(
            {
                success: false,
                errors: result.error.issues,
            },
            {
                status: 400,
            }
        );
    }

    const { fullName ,email, password } = result.data;
    const existingUser = await prisma.user.findUnique({
        where : {
            email
            },
        });

    if (existingUser) {
        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 409,
            }
        );

        const hashedPassword = await bcrypt.hash(password, 12);
        await prisma.user.create({
            data: {
                name: fullName,
                email,
                password: hashedPassword,
            },
        });
    }
}