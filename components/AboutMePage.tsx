
import React from 'react';
import { ARTIST_NAME } from '../constants';

const AboutMePage: React.FC = () => {
  return (
    <div className="bg-white/90 shadow-xl rounded-lg p-6 md:p-10 animate-fadeIn">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
        About {ARTIST_NAME}
      </h2>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">My Journey</h3>
          <p className="mb-4">
            Welcome to my world of colors and emotions! My name is {ARTIST_NAME}, and I am a passionate artist dedicated to capturing the essence of moments, dreams, and the intricate beauty that surrounds us. My journey into art began [mention when or how, e.g., "as a child, fascinated by the play of light and shadow," or "later in life, as a way to express complex emotions"].
          </p>
          <p>
            Over the years, I've explored various mediums, including [mention mediums like "oils, watercolors, and acrylics,"], each offering a unique voice to my artistic narratives. My work is deeply inspired by [mention inspirations, e.g., "the natural world, human experiences, abstract concepts, or specific art movements"].
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Artist Statement</h3>
          <p className="mb-4">
            Through my art, I aim to [mention your artistic goals, e.g., "evoke a sense of wonder, provoke thought, or create a connection with the viewer"]. I believe that art is a powerful form of communication, a bridge between the inner world of the artist and the perceptions of the audience.
          </p>
          <p className="mb-4">
            Each piece you see in this portfolio is a fragment of my story, a reflection of my perspective, and an invitation to pause and experience the world through a different lens. I often work with [mention themes or techniques, e.g., "themes of resilience and transformation, employing techniques that emphasize texture and light"].
          </p>
          <p>
            Thank you for taking the time to explore my creations. I hope my art resonates with you and brings a touch of inspiration to your day.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Connect with Me</h3>
          <p>
            I'm always open to discussing my work, potential commissions, or collaborations. Feel free to reach out via [mention contact method, e.g., "the contact form on this website," or "my social media channels." If you plan to add these later, you can put a placeholder here].
          </p>
          {/* Example:
          <p>Email: <a href="mailto:your.email@example.com" className="text-indigo-500 hover:underline">your.email@example.com</a></p>
          <p>Instagram: <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">@yourprofile</a></p>
          */}
        </section>
      </div>
    </div>
  );
};

export default AboutMePage;