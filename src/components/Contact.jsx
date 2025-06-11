import React from 'react';

export default function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out for collaboration or just a friendly hello 👋</p>
        <a
          href="mailto:sameerahmadansari@gmail.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          sameerahmadansari@gmail.com
        </a>
      </div>
    </section>
  );
}