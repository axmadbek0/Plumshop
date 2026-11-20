import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <footer className="bg-plum-900 text-white mt-16 pt-12 pb-24 md:pb-12 border-t border-plum-800">
      {/* Imtiyozlar qatori */}
      <div className="max-w-7xl mx-auto px-4 pb-12 border-b border-plum-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-plum-800 flex items-center justify-center text-plum-200 shrink-0">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">1 kunda yetkazib berish</h4>
              <p className="text-xs text-plum-100/70">O'zbekiston bo'ylab tezkor</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-plum-800 flex items-center justify-center text-plum-200 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Xavfsiz to'lov</h4>
              <p className="text-xs text-plum-100/70">Click, Payme, Uzum Pay</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-plum-800 flex items-center justify-center text-plum-200 shrink-0">
              <RotateCcw size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">10 kunda qaytarish</h4>
              <p className="text-xs text-plum-100/70">Oson va muammosiz</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-plum-800 flex items-center justify-center text-plum-200 shrink-0">
              <Headphones size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">24/7 Qo'llab-quvvatlash</h4>
              <p className="text-xs text-plum-100/70">+998 (78) 777-00-00</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 ustunli asosiy linklar */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* 1. Biz haqimizda */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Biz haqimizda</h5>
            <ul className="space-y-2.5 text-xs text-plum-100/80">
              <li><Link to="/about" className="hover:text-plum-200 transition-colors">PLUM haqida</Link></li>
              <li><Link to="/careers" className="hover:text-plum-200 transition-colors">Vakansiyalar va martaba</Link></li>
              <li><Link to="/press" className="hover:text-plum-200 transition-colors">Ommaviy axborot vositalari</Link></li>
              <li><Link to="/contacts" className="hover:text-plum-200 transition-colors">Bog'lanish va manzillar</Link></li>
              <li><Link to="/blog" className="hover:text-plum-200 transition-colors">PLUM Blog yangiliklari</Link></li>
            </ul>
          </div>

          {/* 2. Pul ishlash */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">PLUM bilan pul ishlash</h5>
            <ul className="space-y-2.5 text-xs text-plum-100/80">
              <li><Link to="/seller" className="hover:text-plum-200 transition-colors">PLUM da soting</Link></li>
              <li><Link to="/affiliate" className="hover:text-plum-200 transition-colors">Hamkorlik dasturi</Link></li>
              <li><Link to="/delivery-partner" className="hover:text-plum-200 transition-colors">Yetkazib beruvchi bo'ling</Link></li>
              <li><Link to="/pick-up-point" className="hover:text-plum-200 transition-colors">Tarqatish punkti oching</Link></li>
              <li><Link to="/ads" className="hover:text-plum-200 transition-colors">Reklama xizmati</Link></li>
            </ul>
          </div>

          {/* 3. Xaridorlarga yordam */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Xaridorlarga yordam</h5>
            <ul className="space-y-2.5 text-xs text-plum-100/80">
              <li><Link to="/faq" className="hover:text-plum-200 transition-colors">Ko'p beriladigan savollar</Link></li>
              <li><Link to="/delivery-info" className="hover:text-plum-200 transition-colors">Yetkazib berish shartlari</Link></li>
              <li><Link to="/returns" className="hover:text-plum-200 transition-colors">Mahsulotni qaytarish tartibi</Link></li>
              <li><Link to="/orders" className="hover:text-plum-200 transition-colors">Buyurtmani kuzatish</Link></li>
              <li><Link to="/support" className="hover:text-plum-200 transition-colors">Qo'llab-quvvatlash xizmati</Link></li>
            </ul>
          </div>

          {/* 4. To'lov mahsulotlari */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">To'lov mahsulotlari</h5>
            <ul className="space-y-2.5 text-xs text-plum-100/80">
              <li><Link to="/payment-methods" className="hover:text-plum-200 transition-colors">To'lov usullari (Payme/Click)</Link></li>
              <li><Link to="/installment" className="hover:text-plum-200 transition-colors">PLUM Nasiya (0% muddatli)</Link></li>
              <li><Link to="/gift-cards" className="hover:text-plum-200 transition-colors">Sovg'a kartalari</Link></li>
              <li><Link to="/business" className="hover:text-plum-200 transition-colors">PLUM Business to'lovlari</Link></li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-plum-800 rounded text-[11px] font-bold tracking-wider text-plum-200">HUMO</span>
              <span className="px-2 py-1 bg-plum-800 rounded text-[11px] font-bold tracking-wider text-plum-200">UZCARD</span>
              <span className="px-2 py-1 bg-plum-800 rounded text-[11px] font-bold tracking-wider text-plum-200">PAYME</span>
              <span className="px-2 py-1 bg-plum-800 rounded text-[11px] font-bold tracking-wider text-plum-200">CLICK</span>
            </div>
          </div>
        </div>

        {/* Ko'proq ma'lumot (Accordion) */}
        <div className="mt-8 pt-6 border-t border-plum-800 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-1.5 text-xs text-plum-200 hover:text-white font-medium transition-colors"
          >
            <span>{showMore ? "Qisqartirish" : "Ko'proq ma'lumot"}</span>
            <ChevronDown size={14} className={`transform transition-transform ${showMore ? 'rotate-180' : ''}`} />
          </button>

          {showMore && (
            <div className="mt-4 text-left text-xs text-plum-200/80 max-w-4xl mx-auto leading-relaxed space-y-2 bg-plum-800/40 p-4 rounded-xl border border-plum-700/50 animate-in fade-in">
              <p>
                <strong>PLUM</strong> — O'zbekistondagi eng yirik va qulay internet-bozorlaridan biri. Biz xaridorlarga
                millionlab tovarlarni arzon narxlarda va eng asosiysi ertasi kuni topshirish punktiga yetkazib berishni kafolatlaymiz.
              </p>
              <p>
                Platformamiz orqali elektronika, kiyim-kechak, maishiy texnika, go'zallik va salomatlik buyumlarini qulay
                bo'lib to'lash (nasiya) orqali boshlang'ich to'lovsiz xarid qilishingiz mumkin.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Huquqiy qism va Copyright */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-plum-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-plum-200/60">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-plum-500 flex items-center justify-center font-black text-white text-xs">P</div>
          <span className="font-semibold text-white">PLUM Marketplace</span>
          <span>© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Maxfiylik siyosati</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Foydalanish shartlari</Link>
          <Link to="/legal" className="hover:text-white transition-colors">Ommaviy oferta</Link>
        </div>
      </div>
    </footer>
  );
};
