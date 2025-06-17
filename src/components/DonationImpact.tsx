import React, { useEffect, useState } from 'react';
import { DollarSign, Users, Heart, Target } from 'lucide-react';

interface DonationImpactProps {
  onDonateClick: () => void;
}

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

function AnimatedStat({ icon, value, label, prefix = '', suffix = '' }: StatProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = value / 50;
      const interval = setInterval(() => {
        setDisplayValue(prev => {
          const next = prev + increment;
          if (next >= value) {
            clearInterval(interval);
            return value;
          }
          return next;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {prefix}{Math.floor(displayValue).toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default function DonationImpact({ onDonateClick }: DonationImpactProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Donation Makes a Real Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your support helps cover Jerry's medical treatments, caregiver support, and daily 
            quality-of-life needs. Every dollar helps relieve the heavy burden on Jerry and his family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnimatedStat
            icon={<Users className="w-6 h-6 text-green-600" />}
            value={230}
            label="Generous Donors"
            suffix="+"
          />
          <AnimatedStat
            icon={<Heart className="w-6 h-6 text-green-600" />}
            value={48}
            label="Children Who Donated"
          />
          <AnimatedStat
            icon={<DollarSign className="w-6 h-6 text-green-600" />}
            value={3400}
            label="Funds Raised"
            prefix="$"
          />
          <AnimatedStat
            icon={<Target className="w-6 h-6 text-green-600" />}
            value={15000}
            label="Our Goal"
            prefix="$"
          />
        </div>
        
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            You can be the reason Jerry smiles today
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every dollar matters. Your generosity provides hope, comfort, and essential care 
            that makes each day better for Jerry and his family.
          </p>
          <button
            onClick={onDonateClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            Donate Now
            <Heart className="inline-block w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}