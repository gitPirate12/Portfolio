import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col py-8">
      <p className="text-[rgb(179,186,198)] mb-2 text-center text-sm max-md:text-xs">
        Loosely designed in <strong>Galelio AI</strong> and built with{' '}
        <strong>Next.js</strong> and <strong>Tailwind CSS</strong> by yours truly.
      </p>
      <p className="text-[rgb(179,186,198)] mb-2 text-sm text-center max-md:text-xs">
        © 2025 Aneeq Shaffy
      </p>
    </div>
  );
};

export default Footer;
