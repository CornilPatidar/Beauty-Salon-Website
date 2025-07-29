import React from 'react';

const ContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        🟢
      </a>

      {/* Phone */}
      <a
        href="tel:+919999999999"
        title="Call Now"
        className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        📞
      </a>

      {/* Email */}
      <a
        href="mailto:kumkum@example.com"
        title="Send Email"
        className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        ✉️
      </a>
    </div>
  );
};

export default ContactButtons;
