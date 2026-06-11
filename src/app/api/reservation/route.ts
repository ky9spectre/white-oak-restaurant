import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const reservations = await prisma.reservation.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(reservations);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, message } = body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const reservation = await prisma.reservation.create({
      data: { name, email, phone, date, time, guests: Number(guests), message: message || null },
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create reservation" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const reservation = await prisma.reservation.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(reservation);
  } catch {
    return NextResponse.json({ error: "Failed to update reservation" }, { status: 500 });
  }
}
