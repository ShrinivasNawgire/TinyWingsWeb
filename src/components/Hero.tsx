
import { ArrowRight, Heart } from 'lucide-react';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-pink-500" />
              {/* <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Where Little Dreams Take Flight</span> */}
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Little Wings, Big Dreams</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                TinyWings
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Nurturing young minds in a safe, loving, and stimulating environment.
              Where every child is cherished and every day is an adventure in learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-pink-500 rounded-full font-semibold hover:bg-pink-50 dark:hover:bg-gray-700 transition"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
                <figure className="relative flex justify-center items-center py-2 h-36 w-full select-none">
                  {/* Left Arrow */}
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-2 z-20 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow hover:bg-pink-100 dark:hover:bg-pink-900/40 transition"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-pink-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  {/* Images */}
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Carousel image ${idx + 1}`}
                      className={`w-full h-auto rounded-xl object-cover border-2 border-pink-200 absolute transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      style={{ left: '50%', transform: 'translateX(-50%)' }}
                    />
                  ))}
                  {/* Right Arrow */}
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                    className="absolute right-2 z-20 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow hover:bg-pink-100 dark:hover:bg-pink-900/40 transition"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-pink-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </figure>
              <div className="text-center mt-2">
                <div className="text-sm font-medium text-pink-500">Our Happy Kids</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
