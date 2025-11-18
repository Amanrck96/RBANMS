import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEnquiryEmails } from "@/lib/email";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(5),
  captcha: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    await sendEnquiryEmails({ name, email, phone, subject, message });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Enquiry POST error:", err);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}

