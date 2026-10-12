import React from "react";

export async function sendMail({ sender, receiver, subject, context, tone }) {
  const API_URL = process.env.REACT_APP_BASE_URL;

  let request = JSON.stringify({
    senderName: sender,
    receiverName: receiver,
    subject: subject,
    context: context,
    tone: tone,
  });

  try {
    const res = await fetch(`${API_URL}/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: request,
    });

    if (!res.ok)
      throw new Error("❌ Unable to generate email. Please try again.");

    const genMail = await res.json();

    return genMail;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
