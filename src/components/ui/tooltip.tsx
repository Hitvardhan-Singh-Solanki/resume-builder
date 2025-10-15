"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        // Base styling following design system
        "z-50 overflow-hidden rounded-lg border shadow-lg",
        // Background and text colors (professional green theme)
        "bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900",
        // Typography from design system (base size, medium weight)
        "text-base font-medium leading-6 tracking-tight",
        // Spacing from 4-point system
        "px-4 py-2",
        // Smooth entrance animations
        "animate-in fade-in-0 zoom-in-95 duration-300 ease-out",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2", 
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        // Smooth exit animations
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-200 data-[state=closed]:ease-in",
        "data-[state=closed]:data-[side=bottom]:slide-out-to-top-2",
        "data-[state=closed]:data-[side=left]:slide-out-to-right-2",
        "data-[state=closed]:data-[side=right]:slide-out-to-left-2", 
        "data-[state=closed]:data-[side=top]:slide-out-to-bottom-2",
        // Transform origin for smooth animations
        "origin-[--radix-tooltip-content-transform-origin]",
        // Focus and hover states
        "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
