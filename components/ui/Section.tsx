import type React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export default function Section({ as, className, ...props }: SectionProps) {
  const Component = as || "section";
  return (
    <Component
      className={cn("py-12 sm:py-16 lg:py-20", className)}
      {...props}
    />
  );
}
