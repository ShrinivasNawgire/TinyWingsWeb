import { Palette, Music, Blocks, TreePine, BookHeart, Sparkles } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      icon: Palette,
      name: 'Arts & Crafts',
      description: 'Creative expression through painting, drawing, and hands-on projects'
    },
    {
      icon: Music,
      name: 'Music & Movement',
      description: 'Songs, dance, and rhythm activities to develop coordination and expression'
    },
    {
      icon: Blocks,
      name: 'STEM Activities',
      description: 'Building, problem-solving, and exploring science concepts through play'
    },
    {
      icon: TreePine,
      name: 'Outdoor Play',
      description: 'Safe playground with climbing structures, sandbox, and nature exploration'
    },
    {
      icon: BookHeart,
      name: 'Story Time',
      description: 'Daily reading sessions to foster language development and imagination'
    },
    {
      icon: Sparkles,
      name: 'Dramatic Play',
      description: 'Role-playing and imaginative activities to develop social skills'
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Daily Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day is filled with fun, engaging activities designed to spark curiosity and joy
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-amber-50 p-6 rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6Safe">
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.name}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
