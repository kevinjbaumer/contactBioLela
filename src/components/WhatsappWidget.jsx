import React from "react";

export default function WhatsAppWidget({
  phone = "+13398838399",
  message = "Hello Lena, I’m interested in CNA care services.",
}) {
  const href = `https://wa.me/${phone.replace(
    /^\+/,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[9999] right-4 bottom-4 md:right-6 md:bottom-6
                 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#1ebe57]
                 rounded-full flex items-center justify-center shadow-lg
                 animate-vibrate"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <img src="/whatsapp.png" alt="" />
    </a>
  );
}
