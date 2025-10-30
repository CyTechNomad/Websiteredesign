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
    <div className="space-y-0">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-3 sm:gap-4">
          {/* Timeline line and node */}
          <div className="relative flex-shrink-0 w-2.5 sm:w-3">
            {/* Circular node */}
            <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${nodeColor} relative z-10 mt-1.5 sm:mt-2`}></div>
            {/* Vertical line (only show if not the last item) - extends from node to bottom */}
            {index < items.length - 1 && (
              <div className={`w-0.5 ${lineColor} absolute left-1/2 -translate-x-1/2 top-[calc(0.625rem+0.375rem)] sm:top-[calc(0.75rem+0.5rem)] bottom-0`}></div>
            )}
          </div>
          {/* Content */}
          <p className="flex-1 text-muted-foreground text-sm sm:text-base leading-relaxed py-3 sm:py-4">
            <span className="text-primary terminal-prompt"></span>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};
