import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: ButtonVariant;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-accent-500 text-white hover:bg-accent-400",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export default function Button({
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
