import Link from "next/link"
import { MessageCircle } from "lucide-react"

const FloatingWhatsApp = () => {
  return (
    <Link
      href="https://wa.me/919876543210?text=Hello%20Shree%20Marble%20Temples"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-2xl transition-all duration-300 animate-bounce"
      title="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  )
}

export default FloatingWhatsApp
