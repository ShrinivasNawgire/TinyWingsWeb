import { Baby, Smile, GraduationCap, Palette, Music, BookOpen } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Baby,
      title: 'Day Care',
      age: '6 Months - 2 Years',
      description: 'Gentle introduction to structured learning with focus on socialization and motor skills',
      features: ['Circle time', 'Sensory play', 'Story time', 'Music & movement']
    },
    {
      icon: Baby,
      title: 'Playgroup',
      age: '2 - 3 Years',
      description: 'Gentle introduction to structured learning with focus on socialization and motor skills',
      features: ['Circle time', 'Sensory play', 'Story time', 'Music & movement']
    },
    {
      icon: Smile,
      title: 'Nursery',
      age: '3 - 4 Years',
      description: 'Building confidence through creative exploration and interactive learning experiences',
      features: ['Early literacy', 'Math basics', 'Art projects', 'Outdoor play']
    },
    {
      icon: GraduationCap,
      title: 'Jr KG',
      age: '4 - 5 Years',
      description: 'Comprehensive kindergarten prep with focus on academic and social readiness',
      features: ['Reading readiness', 'STEM activities', 'Social skills', 'School preparation']
    },
    {
      icon: GraduationCap,
      title: 'Sr KG',
      age: '5 - 6 Years',
      description: 'Comprehensive kindergarten prep with focus on academic and social readiness',
      features: ['Reading readiness', 'STEM activities', 'Social skills', 'School preparation']
    }
  ];

  const activities = [
    { icon: Palette, title: 'Arts & Crafts', color: 'from-pink-500 to-rose-500' },
    { icon: Music, title: 'Music & Dance', color: 'from-purple-500 to-pink-500' },
    { icon: BookOpen, title: 'Story Time', color: 'from-blue-500 to-purple-500' }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Age-appropriate curricular designed to nurture every stage of early childhood development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {program.title}
                </h3>
                <div className="inline-block bg-pink-100 dark:bg-pink-900/30 px-4 py-1 rounded-full mb-4">
                  <span className="text-sm font-semibold text-pink-700 dark:text-pink-300">{program.age}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Enrichment Activities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6"
                >
                  <div className={`bg-gradient-to-br ${activity.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {activity.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
