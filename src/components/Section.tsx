import React from 'react';

interface SectionProps {
  children: React.ReactNode; // Allow any valid React node as children
  tailwindClasses?: string;  // Optional additional Tailwind CSS classes
}

const Section: React.FC<SectionProps> = ({ children, tailwindClasses = '' }) => {
  return (
    <div
      className={`w-full p-4 mb-4 bg-[rgba(255,255,255,0.6)] backdrop-blur-[2px] rounded-lg shadow-xl overflow-hidden ${tailwindClasses}`}
    >
      {children}
    </div>
  );
};

export default Section;
