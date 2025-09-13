import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { name, email, message } = await req.json();
  try {
    const response = await fetch("https://ping.ditin.in/api/events", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PING_API_KEY}`,
      },
      body: JSON.stringify({
        category: "new-message",
        fields: {
          from: "PORTFOLIO",
          name,
          email,
          message,
        },
      }),
    });
    const data = await response.json();
    if (data.success) {
      return NextResponse.json({
        message: "Message sent successfully",
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "Message sent failed",
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Message sent failed",
      success: false,
    });
  }
};
