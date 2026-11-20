import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Sparkles, Tv, Home, UserCheck } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export const QuickNavPanel: React.FC = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState(0);

  const userName = user?.name || 'Tomas';

  const tabs = [
    {
      id: 0,
      label: `Salom, ${userName}`,
      sublabel: 'Shaxsiy tavsiyalar',
      icon: UserCheck,
      link: '/#recommendations'
    },
    {
      id: 1,
      label: 'Buyurtmalarim',
      sublabel: 'Faol posilkalarni kuzatish',
      icon: Package,
      link: '/orders'
    },
    {
      id: 2,
      label: 'Elektronika (-30%)',
      sublabel: 'Gadjetlar va aksessuarlar',
      icon: Tv,
      link: '/category/computers'
    },
    {
      id: 3,
      label: 'Uy va oshxona',
      sublabel: 'Maishiy qulayliklar',
      icon: Home,
      link: '/category/home-appliances'
    }
  ];

  return (
    <div className="bg-surface-section rounded-[16px] border border-plum-100 p-2 sm:p-3 my-6 shadow-sm">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <Link
              key={tab.id}
              to={tab.link}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-white shadow-sm border border-plum-100'
                  : 'hover:bg-white/60 hover:text-plum-900'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? 'bg-plum-500 text-white shadow-sm'
                    : 'bg-plum-100 text-plum-700'
                }`}
              >
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-plum-900 truncate">
                  {tab.label}
                </div>
                <div className="text-[11px] text-plum-900/60 truncate">
                  {tab.sublabel}
                </div>
              </div>

              {/* Aktiv element ostidagi brend chizig'i (2-rasmdagi uslub) */}
              {isActive && (
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-plum-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
