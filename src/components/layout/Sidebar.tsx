"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LayoutDashboard,
  FileText,
  Layout,
  X,
  LogOut,
  User,
} from "lucide-react";

export function Sidebar() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleToggle = () => {
    setIsTransitioning(true);
    setIsCollapsed(!isCollapsed);
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match the transition duration
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const shouldShowText = !isCollapsed && !isTransitioning;

  const navigationItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Builder",
      href: "/builder",
      icon: FileText,
    },
    {
      name: "Templates",
      href: "/templates",
      icon: Layout,
    },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <TooltipProvider delayDuration={300}>
      <div
        className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col h-screen ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {isCollapsed ? (
            // Collapsed state: Clickable logo centered
            <div className="flex items-center justify-center w-full">
              <button
                onClick={handleToggle}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600 dark:text-green-400"
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
              </button>
            </div>
          ) : (
            // Expanded state: Clickable logo + text + close button
            <>
              <button
                onClick={handleToggle}
                className="flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-600 dark:text-green-400"
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
                </div>
                {shouldShowText && (
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Resume Builder
                  </span>
                )}
              </button>
              <button
                onClick={handleToggle}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const linkContent = (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : "space-x-3"
                } px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {shouldShowText && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );

            return isCollapsed ? (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              linkContent
            );
          })}
        </nav>

        {/* User Section - Fixed at bottom */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {/* Theme Toggle */}
          <div className="flex items-center justify-center mb-4">
            {isCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ThemeToggle />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <div className="flex items-center space-x-3 w-full">
                <ThemeToggle />
                {shouldShowText && (
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Theme
                  </span>
                )}
              </div>
            )}
          </div>

          {/* User Info */}
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Spinner className="w-5 h-5 text-gray-500" />
            </div>
          ) : user ? (
            <div className="space-y-3">
              {/* User Profile */}
              <div className="flex items-center space-x-3">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={32}
                    height={32}
                    className="rounded-full flex-shrink-0"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                )}
                {shouldShowText && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                )}
              </div>

              {/* Sign Out Button */}
              {isCollapsed ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center justify-center px-3 py-2 rounded-lg transition-colors w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
                    >
                      <LogOut className="w-5 h-5 flex-shrink-0" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Sign out</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
                >
                  <LogOut className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Sign out</span>
                </button>
              )}
            </div>
          ) : isCollapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild className="w-full">
                  <Link href="/auth/signin">
                    <User className="w-4 h-4" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Sign In</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button asChild className="w-full">
              <Link href="/auth/signin">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Link>
            </Button>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
