import React from 'react';

export default function Experience() {
  return (
    <section className="bg-[#f1f5f9] py-16" id="experience">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
        <p className="text-gray-600 mt-2">Where I’ve worked and what I’ve done</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold text-blue-600">Care for Good</h3>
          <p className="text-gray-700">Frontend Developer · 2024–Present</p>
          <p className="mt-2 text-gray-600">Building accessible and scalable frontend features using React and Tailwind CSS.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold text-blue-600">Teever</h3>
          <p className="text-gray-700">UI Designer · 2023–2024</p>
          <p className="mt-2 text-gray-600">Designed intuitive user interfaces with a focus on usability and brand consistency.</p>
        </div>
      </div>
    </section>
  );
}