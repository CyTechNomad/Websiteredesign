import React from 'react';

export interface TimelineItem {
  icon: string; // Emoji icon to display (e.g., '🟡', '💡')
  text: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  lineColor: string; // Tailwind color class for the line (e.g., 'border-primary/20')
}

export const Timeline: React.FC<TimelineProps> = ({ items, lineColor }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-3 sm:gap-4">
          {/* Timeline line and node */}
          <div className="relative flex-shrink-0 flex flex-col items-center">
            {/* Icon node */}
            <div className="text-lg sm:text-xl leading-none z-10">
              {item.icon}
            </div>
            {/* Vertical line (only show if not the last item) */}
            {index < items.length - 1 && (
              <div className={`w-0.5 flex-1 mt-1 ${lineColor}`} style={{ minHeight: '2rem' }}></div>
            )}
          </div>
          {/* Content */}
          <p className="flex-1 text-muted-foreground text-sm sm:text-base leading-relaxed pt-0.5">
            <span className="text-primary terminal-prompt"></span>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};
