import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/client"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const user = await prisma.user.create({
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        phone: body.phone,
      },
    })

    const json_response = {
      status: "success",
      msg: "Thank you for subscribing",
      user,
    }
    return NextResponse.json(json_response)
  } catch (e) {
    return NextResponse.json({
      status: "error",
      msg: "Something went wrong",
    })
  }
}
