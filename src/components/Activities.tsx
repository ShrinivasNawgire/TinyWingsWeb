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

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutritious Meals</h3>
            <p className="text-gray-700 mb-4">
              We provide healthy, balanced meals and snacks throughout the day. Our menu is designed with growing children in mind, accommodating dietary restrictions and allergies.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>Morning snack</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>Hot lunch</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>Afternoon snack</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Safe & Secure</h3>
            <p className="text-gray-700 mb-4">
              Your child's safety is our top priority. Our facility features secure entry systems, trained staff in CPR and first aid, and comprehensive safety protocols.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>Secure entry system</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>CPR certified staff</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>Licensed and inspected</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
