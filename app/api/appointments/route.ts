import { NextResponse } from "next/server";

const services = new Set([
  "Preventive care", "Cosmetic dentistry", "Restorative care",
  "Emergency visit", "New patient consultation",
]);

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ error: "Invalid request format." }, { status: 415 });
  }
  const length = Number(request.headers.get("content-length"));
  if (length > 4096) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  let data: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 4096) throw new Error("Too large");
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    data = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request data." }, { status: 400 });
  }

  const get = (key: string) => typeof data[key] === "string" ? (data[key] as string).trim() : "";
  const name = get("name");
  const phone = get("phone");
  const email = get("email");
  const date = get("date");
  const service = get("service");
  const message = get("message");
  const day = new Date(`${date}T00:00:00Z`);
  const today = new Date();
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());

  if (name.length < 2 || name.length > 100 || !/^[+\d\s().-]{7,25}$/.test(phone) ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(day.getTime()) ||
      day.toISOString().slice(0, 10) !== date || day.getTime() < todayUtc ||
      !services.has(service) || message.length > 500) {
    return NextResponse.json({ error: "Please check the form fields and preferred date." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key || !/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)) {
    console.error("Appointment database is not configured.");
    return NextResponse.json({ error: "Request service is temporarily unavailable." }, { status: 503 });
  }

  try {
    const result = await fetch(`${url}/rest/v1/appointment_requests`, {
      method: "POST",
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, phone, email, preferred_date: date, service, message: message || null }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!result.ok) {
      console.error("Appointment insert failed:", result.status);
      throw new Error("Database insert failed");
    }
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not save your request. Please try again later." }, { status: 503 });
  }
}
