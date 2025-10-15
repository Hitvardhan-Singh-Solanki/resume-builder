import React from "react";

interface ResumeBuilderLogoProps {
  className?: string;
}

export function ResumeBuilderLogo({ className }: ResumeBuilderLogoProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Document icon with modern styling */}
      <rect
        x="6"
        y="4"
        width="16"
        height="22"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Lines representing text */}
      <line
        x1="9"
        y1="9"
        x2="19"
        y2="9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="12"
        x2="17"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="15"
        x2="19"
        y2="15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="18"
        x2="15"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Corner fold */}
      <path
        d="M18 4 L22 4 L22 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Green accent dot */}
      <circle
        cx="24"
        cy="8"
        r="3"
        fill="currentColor"
        className="text-green-500"
      />
    </svg>
  );
}
