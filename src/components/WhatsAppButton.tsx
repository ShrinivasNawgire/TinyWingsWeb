import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '918624051851';
  const message = 'Hi! I would like to know more about TinyWings Preschool & Activity Canter.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </button>
  );
}
