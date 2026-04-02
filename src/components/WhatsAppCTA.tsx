import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/923165511251"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-3 sm:right-5 bottom-4 sm:bottom-6 z-50 inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5"
    >
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
};

export default WhatsAppCTA;
