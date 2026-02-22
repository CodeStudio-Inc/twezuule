import type React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
};

export default function Container({ as, className, ...props }: ContainerProps) {
  const Component = as || "div";
  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6", className)}
      {...props}
    />
  );
}
