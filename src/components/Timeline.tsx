import React from 'react';

export interface TimelineItem {
  text: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  nodeColor: string; // Tailwind color class for the node (e.g., 'bg-primary')
  lineColor: string; // Tailwind color class for the line (e.g., 'bg-primary/20')
}

export const Timeline: React.FC<TimelineProps> = ({ items, nodeColor, lineColor }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-3 sm:gap-4">
          {/* Timeline line and node */}
          <div className="relative flex-shrink-0 flex flex-col items-center">
            {/* Circular node */}
            <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${nodeColor} z-10 flex-shrink-0`}></div>
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
