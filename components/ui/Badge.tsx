import type React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-brand-700",
        className
      )}
      {...props}
    />
  );
}
