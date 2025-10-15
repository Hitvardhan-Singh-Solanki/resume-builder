"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Heading1 } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function Navbar() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <Heading1 className="text-gray-900 dark:text-gray-100">
                Resume Builder
              </Heading1>
            </Link>
          </div>

          {/* Desktop Navigation - Only show when signed in */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/dashboard"
                className={`text-body px-3 py-2 rounded-lg transition-colors ${
                  isActive("/dashboard")
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/builder"
                className={`text-body px-3 py-2 rounded-lg transition-colors ${
                  isActive("/builder")
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                }`}
              >
                Builder
              </Link>
              <Link
                href="/templates"
                className={`text-body px-3 py-2 rounded-lg transition-colors ${
                  isActive("/templates")
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                }`}
              >
                Templates
              </Link>
            </div>
          )}

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Spinner className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">Loading...</span>
              </div>
            ) : isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-3 text-sm rounded-full focus:outline-none"
                >
                  <div className="flex items-center space-x-2">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.name?.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                    )}
                    <span className="hidden sm:block text-gray-900 dark:text-gray-100 font-medium">
                      {user.name}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <div className="border-t border-gray-100">
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button - Only show when signed in */}
          {isAuthenticated && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu - Only show when signed in */}
        {isMenuOpen && isAuthenticated && user && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/dashboard"
                className={`block px-3 py-2 body rounded-lg transition-colors ${
                  isActive("/dashboard")
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/builder"
                className={`block px-3 py-2 body rounded-lg transition-colors ${
                  isActive("/builder")
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Builder
              </Link>
              <Link
                href="/templates"
                className={`block px-3 py-2 body rounded-lg transition-colors ${
                  isActive("/templates")
                    ? "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center px-3 py-2">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                  )}
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
