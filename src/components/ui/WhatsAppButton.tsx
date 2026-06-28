"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  fullWidth?: boolean;
}

export default function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  size = "md",
  variant = "primary",
  className,
  fullWidth,
}: WhatsAppButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const variants = {
    primary:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-200 hover:shadow-green-300",
    outline:
      "border-2 border-[#25D366] text-[#16a34a] hover:bg-[#25D366] hover:text-white",
    ghost: "text-[#16a34a] hover:bg-green-50",
  };

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer",
        sizes[size],
        variants[variant],
        fullWidth && "w-full",
        className
      )}
    >
      <MessageCircle className="shrink-0" size={size === "lg" ? 22 : size === "sm" ? 16 : 20} />
      {label}
    </motion.a>
  );
}
