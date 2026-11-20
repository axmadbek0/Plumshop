import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useUIStore } from '../../store/useUIStore';
import { useAuthStore } from '../../store/useAuthStore';
import { Phone, CheckCircle2 } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen, addToast } = useUIStore();
  const { login } = useAuthStore();

  const [phone, setPhone] = useState('+998 ');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [otp, setOtp] = useState('');

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 9) {
      addToast('Iltimos, to\'g\'ri telefon raqam kiriting', 'error');
      return;
    }
    setStep('otp');
    addToast('Tasdiqlash kodi: 7777', 'info');
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '7777' || otp.length === 4) {
      await login(phone);
      setAuthModalOpen(false);
      setStep('phone');
      setOtp('');
      addToast('Muvaffaqiyatli kirdingiz! Xush kelibsiz.', 'success');
    } else {
      addToast('Kodni noto\'g\'ri kiritdingiz (Sinash uchun: 7777)', 'error');
    }
  };

  return (
    <Modal
      isOpen={isAuthModalOpen}
      onClose={() => setAuthModalOpen(false)}
      title="PLUM ga kirish yoki ro'yxatdan o'tish"
      maxWidth="sm"
    >
      {step === 'phone' ? (
        <form onSubmit={handleSendCode} className="space-y-4">
          <p className="text-xs text-plum-900/70">
            Telefon raqamingizni kiriting. Biz sizga bir martalik tasdiqlash kodini yuboramiz.
          </p>

          <div>
            <label className="text-xs font-bold text-plum-900 block mb-1.5">Telefon raqam</label>
            <div className="relative">
              <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-400" />
              <input
                type="tel"
                placeholder="+998 (__) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 font-semibold focus:outline-none focus:border-plum-500"
                required
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Kodni olish
          </Button>

          <p className="text-[11px] text-center text-plum-900/50">
            Davom etish orqali siz ommaviy oferta va maxfiylik siyosatiga rozilik bildirasiz.
          </p>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <p className="text-xs text-plum-900/70">
            <strong>{phone}</strong> raqamiga yuborilgan 4 xonali SMS kodni kiriting (Test kod: <strong>7777</strong>):
          </p>

          <div>
            <input
              type="text"
              maxLength={4}
              placeholder="7777"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full h-12 text-center tracking-widest text-xl font-bold rounded-input bg-surface-light border border-plum-200 text-plum-900 focus:outline-none focus:border-plum-500"
              autoFocus
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Tasdiqlash va kirish
          </Button>

          <button
            type="button"
            onClick={() => setStep('phone')}
            className="w-full text-center text-xs text-plum-600 hover:underline"
          >
            Raqamni o'zgartirish
          </button>
        </form>
      )}
    </Modal>
  );
};
