import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
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
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Where Little Dreams Take Flight</span>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy children learning"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 dark:bg-yellow-500 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">5+</div>
                <div className="text-sm font-medium text-gray-700">Years Experience</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-pink-500 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">80+</div>
                <div className="text-sm font-medium text-pink-100">Happy Kids</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
