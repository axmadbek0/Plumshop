import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useUIStore } from '../store/useUIStore';
import { Button } from '../components/ui/Button';
import { User, Phone, Mail, MapPin, Shield, LogOut } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, updateUser, logout } = useAuthStore();
  const { addToast } = useUIStore();

  const [name, setName] = useState(user?.name || 'Tomas');
  const [email, setEmail] = useState(user?.email || 'tomas@plum.uz');
  const [phone, setPhone] = useState(user?.phone || '+998 (90) 123-45-67');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ name, email, phone });
    addToast('Profil ma\'lumotlari muvaffaqiyatli saqlandi', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-black text-plum-900 mb-8 pb-4 border-b border-plum-100">
        Foydalanuvchi profili
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Chap panel: Avatar va xulosa */}
        <div className="bg-white rounded-[20px] border border-plum-100 p-6 shadow-sm text-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-plum-100 border-4 border-white shadow-card mx-auto overflow-hidden">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <User size={48} className="text-plum-600 m-auto mt-5" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-plum-900">{user?.name}</h3>
            <p className="text-xs text-plum-900/60">{user?.phone}</p>
          </div>
          <div className="pt-4 border-t border-plum-100">
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut size={16} />
              <span>Chiqish</span>
            </Button>
          </div>
        </div>

        {/* O'ng panel: Ma'lumotlarni tahrirlash */}
        <div className="md:col-span-2 bg-white rounded-[20px] border border-plum-100 p-6 shadow-sm">
          <h3 className="text-base font-bold text-plum-900 mb-6 pb-2 border-b border-plum-50">
            Shaxsiy ma'lumotlar
          </h3>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-plum-900 block mb-1">To'liq ism</label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 focus:outline-none focus:border-plum-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-plum-900 block mb-1">Telefon raqam</label>
              <div className="relative">
                <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-400" />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 focus:outline-none focus:border-plum-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-plum-900 block mb-1">Elektron pochta</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-input bg-surface-light border border-plum-200 text-sm text-plum-900 focus:outline-none focus:border-plum-500"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" size="md">
                O'zgarishlarni saqlash
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
