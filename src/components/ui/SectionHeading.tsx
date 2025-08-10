import React from 'react';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center'
}) => {
  return <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && <span className="inline-block text-cyan-400 font-medium mb-2 tracking-wider">
          {subtitle}
        </span>}
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
      </h2>
    </div>;
};