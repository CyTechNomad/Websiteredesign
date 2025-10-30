import React from 'react';

export interface TimelineItem {
  text: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  color: string; // Tailwind color class for the line and nodes (e.g., 'primary', '[#ffd700]')
  promptColor: string; // Color for the terminal prompt
}

export const Timeline: React.FC<TimelineProps> = ({ items, color, promptColor }) => {
  return (
    <div className="relative flex gap-3 sm:gap-4">
      {/* Timeline line */}
      <div className={`relative w-0.5 bg-${color}/20`}>
        {/* Timeline nodes */}
        {items.map((_, index) => (
          <div
            key={index}
            className={`absolute -left-[0.3125rem] sm:-left-[0.375rem] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              index === 0 ? `bg-${color} glow-border` : `bg-${color}/50`
            }`}
            style={{
              top: index === 0 ? '0.25rem' : `${3.5 + index * 3.5}rem`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <p key={index} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            <span className={`text-${promptColor} terminal-prompt`}></span>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};
