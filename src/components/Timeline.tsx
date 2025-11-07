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
    <div className="relative">
      {/* Continuous vertical line */}
      <div
        className={`absolute left-[0.4375rem] sm:left-[0.5625rem] top-0 bottom-0 w-0.5 border-${lineColor} border`}
      ></div>

      {/* Timeline items */}
      <div className="space-y-0">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start gap-3 sm:gap-4">
            {/* Node */}
            <div className="relative flex-shrink-0 w-2.5 sm:w-3 pt-[0.9375rem] sm:pt-4">
              <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${nodeColor} relative z-10`}></div>
            </div>
            {/* Content */}
            <p className="flex-1 text-muted-foreground text-sm sm:text-base leading-relaxed py-3 sm:py-4">
              <span className="text-primary terminal-prompt"></span>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
