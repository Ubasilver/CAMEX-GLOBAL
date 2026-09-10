import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/services';

export function WhatsAppButton() {
  return (
    <motion.a
      href={companyInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CAMEX on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-accent-green hover:bg-accent-green/90 shadow-lg shadow-accent-green/20 flex items-center justify-center text-white transition-colors"
    >
      <MessageCircle size={26} fill="white" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border-2 border-accent-green" />
    </motion.a>
  );
}
