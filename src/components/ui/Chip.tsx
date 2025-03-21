
import React from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const Chip = ({
  children,
  variant = "default",
  size = "md",
  className,
  onClick,
}: ChipProps) => {
  const variants = {
    default: "bg-secondary text-foreground",
    outline: "bg-transparent border border-cannabis-600/50 text-foreground",
    primary: "bg-cannabis-600/20 text-cannabis-200",
  };

  const sizes = {
    sm: "text-xs py-1 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        onClick ? "cursor-pointer hover:opacity-90" : "",
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Chip;
