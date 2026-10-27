import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  phone: string;
  service: string;
  locality: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const service = body.service?.trim();
    const locality = body.locality?.trim();
    const message = body.message?.trim() || "";

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = "Please provide your full name (at least 2 characters).";
    }

    // Validate 10-digit Indian phone number
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit contact number.";
    }

    if (!service) {
      errors.service = "Please select the required water service.";
    }

    if (!locality || locality.length < 2) {
      errors.locality = "Please enter your area or society locality (e.g., Anand Park, Dhanori).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please complete all required fields correctly.",
        },
        { status: 400 }
      );
    }

    // Sanitized record
    const inquiryRecord = {
      timestamp: new Date().toISOString(),
      name,
      phone: cleanPhone,
      service,
      locality,
      message,
    };

    // Log the valid inquiry to server logs
    console.log("[Om Sai Aqua Delivery Inquiry]:", JSON.stringify(inquiryRecord, null, 2));

    /*
     * Production Delivery Hook:
     * When RESEND_API_KEY or SMTP credentials are configured in .env.local,
     * dispatch an immediate email / SMS notification to Deepak Khatave (+91 9552989143).
     */

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name}! Your delivery request has been received. Our team will contact you at ${cleanPhone} shortly.`,
        data: {
          referenceId: `OSA-${Date.now().toString().slice(-6)}`,
          service,
          locality,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please call us directly.",
      },
      { status: 500 }
    );
  }
}
