import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/mockData';

export const CategoryChainScroll: React.FC = () => {
  // 2-rasm j) qismi:
  // Changyutgichlar, Konsollar, Portativ karnaylar, Proyektorlar (chegirma foizi bilan)
  const chainItems = [
    {
      id: 'chain-1',
      title: 'Changyutgichlar',
      discount: '30% gacha tejash',
      image: PRODUCTS[11].images[0], // Dreame vacuum
      link: '/category/home-appliances?sub=vacuums',
    },
    {
      id: 'chain-2',
      title: 'O\'yin konsollari',
      discount: '25% gacha tejash',
      image: PRODUCTS[12].images[0], // PS5
      link: '/category/gaming?sub=consoles',
    },
    {
      id: 'chain-3',
      title: 'Portativ karnaylar',
      discount: '20% gacha tejash',
      image: PRODUCTS[13].images[0], // JBL Charge
      link: '/category/audio?sub=portable-speakers',
    },
    {
      id: 'chain-4',
      title: 'Aqlli proyektorlar',
      discount: '35% gacha tejash',
      image: PRODUCTS[14].images[0], // Wanbo projector
      link: '/category/electronics?sub=projectors',
    },
  ];

  return (
    <section className="my-10 bg-white rounded-[20px] border border-plum-100 p-4 sm:p-6 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {chainItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-surface-section transition-colors group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-surface-light p-2 shrink-0 border border-plum-100 group-hover:border-plum-300 transition-colors flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-plum-900 group-hover:text-plum-500 transition-colors truncate">
                {item.title}
              </h4>
              <p className="text-[11px] font-semibold text-plum-500 mt-0.5">
                {item.discount}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
