import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const contactMessage = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    return NextResponse.json(contactMessage, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const message = await prisma.contactMessage.update({
      where: { id },
      data: { read: true },
    });

    return NextResponse.json(message);
  } catch {
    return NextResponse.json({ error: "Failed to mark message as read" }, { status: 500 });
  }
}
