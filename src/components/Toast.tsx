import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#181412] border border-[#d83a34]/60 text-[#f2ece2] rounded-lg shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
      <CheckCircle2 className="w-5 h-5 text-[#d83a34]" />
      <span className="text-sm font-medium tracking-wide">{message}</span>
    </div>
  );
};
