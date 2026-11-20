import React from 'react';
import { useUIStore } from '../../store/useUIStore';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useUIStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            'pointer-events-auto flex items-center justify-between p-3.5 rounded-xl shadow-lg border text-sm transition-all duration-300 animate-in slide-in-from-bottom-3',
            toast.type === 'success' && 'bg-white border-plum-200 text-plum-900',
            toast.type === 'error' && 'bg-red-50 border-red-200 text-red-900',
            toast.type === 'info' && 'bg-plum-50 border-plum-200 text-plum-900'
          )}
        >
          <div className="flex items-center gap-2.5">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-plum-500 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-plum-600 shrink-0" />}
            <span className="font-medium">{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-plum-900/40 hover:text-plum-900 ml-2"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
