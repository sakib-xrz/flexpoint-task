import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto",
        "max-w-6xl",
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
