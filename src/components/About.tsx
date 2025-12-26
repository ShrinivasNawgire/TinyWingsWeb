import { Shield, Users, Award, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Child-proof facilities with security and trained staff ensuring your child\'s safety'
    },
    {
      icon: Users,
      title: 'Expert Teachers',
      description: 'Certified and experienced educators passionate about early childhood development'
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Research-based curriculum designed to foster creativity and critical thinking'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Extended hours and flexible schedules to accommodate working parents'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              TinyWings?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide a nurturing foundation where children develop confidence, creativity, and a lifelong love of learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/8613261/pexels-photo-8613261.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Children playing"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At TinyWings, we believe every child deserves a strong start. Our mission is to create a warm, inclusive environment where children feel valued, respected, and empowered to explore their potential.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Through play-based learning, we encourage curiosity, build social skills, and lay the groundwork for academic success. Our dedicated team works closely with families to ensure each child's unique needs are met.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <div className="bg-pink-100 dark:bg-pink-900/30 px-6 py-3 rounded-full">
                <span className="text-pink-700 dark:text-pink-300 font-semibold">Ages 2-6</span>
              </div> */}
              <div className="bg-purple-100 dark:bg-purple-900/30 px-6 py-3 rounded-full">
                <span className="text-purple-700 dark:text-purple-300 font-semibold">Licensed & Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
