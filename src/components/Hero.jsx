import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white text-center py-20 px-6" id="hero">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Hi, I'm Sameer Ahmad
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          A passionate <strong>Frontend Developer</strong> with expertise in <strong>React.js, Next.js, and Tailwind CSS</strong>. I love crafting visually appealing, high-performance web applications that provide seamless user experiences. With <strong>5+ years of experience</strong>, I've worked on <strong>11+ projects</strong> and collaborated with <strong>30+ happy clients</strong>. My goal is to build innovative solutions that make an impact!
        </p>
        <a
          href="#portfolio"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}