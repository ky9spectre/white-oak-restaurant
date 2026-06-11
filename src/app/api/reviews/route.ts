import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, text, source } = body;

    if (!name || !rating || !text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const review = await prisma.review.create({
      data: { name, rating: Number(rating), text, source: source || "website" },
    });

    return NextResponse.json(review, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, approved } = body;

    if (!id || typeof approved !== "boolean") {
      return NextResponse.json({ error: "Missing id or approved" }, { status: 400 });
    }

    const review = await prisma.review.update({
      where: { id },
      data: { approved },
    });

    return NextResponse.json(review);
  } catch {
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}
