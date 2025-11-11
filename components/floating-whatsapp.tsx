import Link from "next/link";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <Link
      href="https://wa.me/917976732828?text=Hello%20Aadidev%20Studio%20Team"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-2xl transition-all duration-300 animate-bounce"
      title="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  );
};

export default FloatingWhatsApp;
