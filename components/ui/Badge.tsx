import type React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-600",
        className
      )}
      {...props}
    />
  );
}
