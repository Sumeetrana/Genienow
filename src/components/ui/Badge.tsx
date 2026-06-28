import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "green" | "blue" | "orange" | "pink" | "purple" | "default";
}

const variants = {
  green: "bg-green-50 text-green-700 ring-1 ring-green-200",
  blue: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
  orange: "bg-orange-50 text-orange-700 ring-1 ring-orange-200",
  pink: "bg-pink-50 text-pink-700 ring-1 ring-pink-200",
  purple: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
  default: "bg-slate-50 text-slate-700 ring-1 ring-slate-200",
};

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
