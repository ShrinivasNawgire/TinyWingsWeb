import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
// import { QRCodeSVG } from 'qrcode.react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/TinyWingsLearning', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/tinywingslearning/', label: 'Instagram' },
    { icon: Twitter, url: 'https://x.com/TinyWingsLearn', label: 'Twitter' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/tiny-wings-0807063a8/', label: 'LinkedIn' },
    { icon: Youtube, url: 'https://www.youtube.com/channel/UCXnyKr_aodF5V7mgx-mWMCg', label: 'YouTube' }
  ];

  const quickLinks = [
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Programs', id: 'programs' },
    { title: 'Activities', id: 'activities' },
    { title: 'Testimonials', id: 'testimonials' },
    { title: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-0 mb-4">
            <img src={require('../assets/butterfly.png')} className="w-10 mt-2 mr-2" alt="TinyWings Logo" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                TinyWings
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nurturing young minds in a safe, loving, and stimulating environment where every child is cherished.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 p-2 rounded-lg transition transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Day Care (6 Months - 2 Years)</li>
              <li>Playgroup (2 - 3 Years)</li>
              <li>Nursery (3 - 4 Years)</li>
              <li>Jr KG (4 - 5 Years)</li>
              <li>Sr KG (5 - 6 Years)</li>
            </ul>
          </div>

           {/* <div>
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-lg">
                <QRCodeSVG
                  value="https://play.google.com/store/apps/details?id=com.tinywings.app"
                  size={100}
                  level="H"
                  includeMargin={true}
                />
                <p className="text-xs text-gray-600 mt-2 text-center font-semibold">Google Play</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <QRCodeSVG
                  value="https://apps.apple.com/app/tinywings/id1234567890"
                  size={100}
                  level="H"
                  includeMargin={true}
                />
                <p className="text-xs text-gray-600 mt-2 text-center font-semibold">App Store</p>
              </div>
            </div>
          </div> */}

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Plot No. 27, Honey Bunny Building, Near Datta Mandir, Mayur Park,
                  Jalgaon Road, Chhatrapati Sambhaji Nagar - 431003
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-pink-500 transition">
                862 405 1851
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <a href="mailto:info@tinywingslearning.com?subject=Know more about TinyWings Preschool &body=Hi! I would like to know more about TinyWings Preschool." className="text-gray-400 hover:text-pink-500 transition">
                 info@tinywingslearning.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TinyWings Preschool. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
