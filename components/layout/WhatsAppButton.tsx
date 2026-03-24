import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256755396053"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-md transition hover:bg-accent-400"
      aria-label="Chat with the founder on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      WhatsApp
    </a>
  );
}
