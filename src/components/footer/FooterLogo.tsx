import React from 'react';
import image from '../../images/logofooter.jpg'

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <img
        src={`${image}?height=60&width=150`}
        alt="8 Limbs Yoga Studio"
        width={150}
        height={60}
      />
      <h2 className="text-xl font-bold">8 LIMBS YOGA STUDIO</h2>
      <p className="text-sm text-gray-600">
        At 8 Limbs Yoga Studios, we merge ancient wisdom with contemporary lifestyles, fostering a space where
        wellness, knowledge, and expertise converge to inspire a transformative yoga journey.
      </p>
      <div className="space-y-2">
        <p className="text-sm">📞 +91 75586 60993</p>
        <p className="text-sm">✉️ info@8limbsyogastudios.com</p>
      </div>
    </div>
  );
};

export default FooterLogo;

