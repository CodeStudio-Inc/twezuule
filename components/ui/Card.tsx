import type React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white p-6",
        className
      )}
      {...props}
    />
  );
}
