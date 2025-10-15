/**
 * Typography Components
 * Professional typography components using Inter font
 */

import { cn } from "@/lib/utils";
import { type TypographyScale } from "../tokens/typography";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const typographyVariants = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  body: "text-body",
  caption: "text-caption",
} as const;

export function Typography({
  children,
  className,
  as: Component = "div",
  variant = "body",
}: TypographyProps & { variant?: TypographyScale }) {
  return (
    <Component className={cn(typographyVariants[variant], className)}>
      {children}
    </Component>
  );
}

// Specific typography components
export function Heading1({ children, className, ...props }: TypographyProps) {
  return (
    <Typography as="h1" variant="h1" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Heading2({ children, className, ...props }: TypographyProps) {
  return (
    <Typography as="h2" variant="h2" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Heading3({ children, className, ...props }: TypographyProps) {
  return (
    <Typography as="h3" variant="h3" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Heading4({ children, className, ...props }: TypographyProps) {
  return (
    <Typography as="h4" variant="h4" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Body({ children, className, ...props }: TypographyProps) {
  return (
    <Typography as="p" variant="body" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Caption({ children, className, ...props }: TypographyProps) {
  return (
    <Typography as="span" variant="caption" className={className} {...props}>
      {children}
    </Typography>
  );
}
