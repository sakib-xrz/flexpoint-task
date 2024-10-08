import React, { useState } from "react";
import { cn } from "../../../lib/utils";

const Tooltip = ({
  triggerText,
  tooltipContent,
  tooltipPositionClassName = "left-[-10px]",
  tooltipArrowClassName = "left-[20px]",
}: {
  triggerText: React.ReactNode;
  tooltipContent: string;
  tooltipPositionClassName?: string;
  tooltipArrowClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex">
      <div
        className="cursor-pointer inline-flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{triggerText}</span>
      </div>

      {isHovered && (
        <div
          className={cn(
            "bg-white border border-white rounded-md shadow-lg text-[#49687e] text-sm absolute leading-[1.5] p-2 whitespace-normal break-words z-10 bottom-[calc(100%+8px)] w-full lg:w-[224px]",
            tooltipPositionClassName
          )}
        >
          <div className="relative">
            <span
              className="block break-words"
              dangerouslySetInnerHTML={{ __html: tooltipContent }}
            ></span>
            <div
              className={cn(
                "absolute bottom-[-13px] w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent bg-transparent border-t-white shadow-md",
                tooltipArrowClassName
              )}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
