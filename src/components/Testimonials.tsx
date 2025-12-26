import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Kiara Adwani',
      role: 'Parent of Saraayah, 2',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'TinyWings has been a blessing for our family. Emma looks forward to school every day and has blossomed socially and academically. The teachers are incredible!',
      rating: 5
    },
    {
      name: 'Siddharth Malhotra',
      role: 'Parent of Saraayah, 3',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The care and attention my son receives at TinyWings is outstanding. The staff truly cares about each child\'s development and well-being. Highly recommend!',
      rating: 5
    },
    {
      name: 'Katrina Kaif',
      role: 'Parent of Unknown, 3',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'My daughter has grown so much since joining TinyWings. The curriculum is engaging, and the facility is clean and safe. We couldn\'t be happier with our choice!',
      rating: 5
    },
    {
      name: 'Deepika Padukone',
      role: 'Parent of Dua, 4',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'As working parents, we needed a preschool we could trust. TinyWings exceeded our expectations with their professionalism, warmth, and dedication to early education.',
      rating: 5
    },
    {
      name: 'Alia Bhatt',
      role: 'Parent of Raha, 3',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The teachers at TinyWings are passionate and nurturing. They make learning fun and have helped my daughter develop confidence and independence.',
      rating: 5
    },
    {
      name: 'Ranbir Kapoor',
      role: 'Parent of Raha, 5',
      image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'TinyWings prepared my son wonderfully for kindergarten. The focus on both academics and social-emotional development made all the difference. Thank you!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Parents{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families who trust us with their little ones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-pink-500 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our TinyWings Family</h3>
          <p className="text-xl mb-8 opacity-90">
            Give your child the gift of a wonderful preschool experience
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition"
          >
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
}
