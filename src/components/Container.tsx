import { cn } from "../lib/utils";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto",
        "max-w-7xl",
        "px-4",
        "py-5",
        "lg:py-8",
        className || ""
      )}
    >
      {children}
    </div>
  );
}
