import React, { useState } from "react";

const Tooltip = ({
  triggerText,
  tooltipContent,
  maxWidth = "224px",
  tooltipPosition = "bottom-[calc(100%+10px)] left-[-10px]",
}: {
  triggerText: React.ReactNode;
  tooltipContent: React.ReactNode;
  maxWidth?: string;
  tooltipPosition?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex w-full">
      {/* Tooltip Trigger Content */}
      <div
        className="inline-flex cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{triggerText}</span>
      </div>

      {/* Tooltip Hover Content */}
      {isHovered && (
        <div
          className={`bg-white border border-white rounded-md shadow-lg text-[#49687e] text-sm absolute ${tooltipPosition} leading-[1.5] max-w-[${maxWidth}] p-2 w-[calc(100%+20px)] whitespace-normal break-words z-10`}
        >
          <div className="relative">
            <span className="block break-words">{tooltipContent}</span>
            <div className="absolute bottom-[-13px] left-[20px] w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent bg-transparent border-t-white shadow-md"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
