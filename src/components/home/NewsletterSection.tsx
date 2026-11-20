import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useUIStore } from '../../store/useUIStore';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addToast } = useUIStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Iltimos, to\'g\'ri email manzilini kiriting', 'error');
      return;
    }
    setIsSubmitted(true);
    addToast('Muvaffaqiyatli obuna bo\'ldingiz! 50 000 so\'mlik vaucher emailingizga yuborildi.', 'success');
  };

  return (
    <section className="my-12 rounded-[24px] bg-gradient-to-r from-[#f4e9f0] via-[#faf5f8] to-[#e2c9db]/50 border border-plum-100 p-8 sm:p-12 overflow-hidden relative shadow-soft">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Chap qism: Sarlavha, ma'lumot va forma */}
        <div className="md:col-span-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-plum-500 bg-white px-3 py-1 rounded-full border border-plum-200 inline-block">
            Eksklyuziv takliflar
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-plum-900 tracking-tight">
            YANGILIKLARGA OBUNA BO'LING
          </h2>
          <p className="text-xs sm:text-sm text-plum-900/70 max-w-lg leading-relaxed">
            Haftalik maxsus chegirmalar, yangi tovarlar va shaxsiy promokodlar haqida birinchi bo'lib xabardor bo'ling.
            Obuna bo'ling va ilk xaridingiz uchun 50 000 so'm chegirmaga ega bo'ling!
          </p>

          {isSubmitted ? (
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-plum-200 text-plum-900 max-w-md">
              <CheckCircle2 size={24} className="text-plum-500 shrink-0" />
              <div>
                <p className="text-sm font-bold">Rahmat! Siz ro'yxatdan o'tdingiz.</p>
                <p className="text-xs text-plum-900/70">Promokodingiz: <span className="font-mono font-bold text-plum-500">PLUM2026</span></p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-400" />
                <input
                  type="email"
                  placeholder="Elektron pochtangizni kiriting..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-input bg-white border border-plum-200 text-sm text-plum-900 placeholder:text-plum-900/40 focus:outline-none focus:border-plum-500 focus:ring-2 focus:ring-plum-200 transition-all"
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="md" className="shrink-0">
                Obuna bo'lish
              </Button>
            </form>
          )}

          <p className="text-[11px] text-plum-900/50">
            Obuna bo'lish orqali maxfiylik siyosatimizga rozilik bildirasiz. Istalgan vaqtda bekor qilish mumkin.
          </p>
        </div>

        {/* 2-rasmdagi: O'ng tomonda quvnoq inson rasmi */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-elevated border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
              alt="Plum mamnun mijoz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
