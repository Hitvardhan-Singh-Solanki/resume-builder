/**
 * Spacing Components
 * Professional spacing components using 4-point system
 */

import { cn } from "@/lib/utils";

interface SpacingProps {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const spacingSizes = {
  xs: "space-y-1",
  sm: "space-y-2",
  md: "space-y-3",
  lg: "space-y-4",
  xl: "space-y-6",
  "2xl": "space-y-8",
} as const;

export function Spacing({ children, className, size = "md" }: SpacingProps) {
  return <div className={cn(spacingSizes[size], className)}>{children}</div>;
}

// Specific spacing components
export function Stack({
  children,
  className,
  size = "md",
  ...props
}: SpacingProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(spacingSizes[size], className)} {...props}>
      {children}
    </div>
  );
}

export function Inline({
  children,
  className,
  size = "md",
  ...props
}: SpacingProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        `flex items-center gap-${
          size === "xs"
            ? "1"
            : size === "sm"
            ? "2"
            : size === "md"
            ? "3"
            : size === "lg"
            ? "4"
            : size === "xl"
            ? "6"
            : "8"
        }`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
