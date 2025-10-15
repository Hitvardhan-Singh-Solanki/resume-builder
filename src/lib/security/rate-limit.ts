import { NextRequest } from "next/server";

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  message: string;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
  message?: string;
}

// In-memory store for rate limiting (for development)
// In production, use Redis or similar
const requestCounts = new Map<string, { count: number; resetTime: number }>();

const defaultConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // 100 requests per window
  message: "Too many requests, please try again later",
};

/**
 * Simple in-memory rate limiter
 * @param identifier - Unique identifier for the client (IP, user ID, etc.)
 * @param config - Rate limiting configuration
 * @returns Rate limit result
 */
export async function rateLimit(
  identifier: string,
  config: Partial<RateLimitConfig> = {}
): Promise<RateLimitResult> {
  const finalConfig = { ...defaultConfig, ...config };
  const now = Date.now();

  // Clean up expired entries
  for (const [key, value] of requestCounts.entries()) {
    if (value.resetTime < now) {
      requestCounts.delete(key);
    }
  }

  const current = requestCounts.get(identifier);

  if (!current || current.resetTime < now) {
    // First request or window expired
    requestCounts.set(identifier, {
      count: 1,
      resetTime: now + finalConfig.windowMs,
    });

    return {
      success: true,
      limit: finalConfig.maxRequests,
      remaining: finalConfig.maxRequests - 1,
      reset: now + finalConfig.windowMs,
    };
  }

  if (current.count >= finalConfig.maxRequests) {
    return {
      success: false,
      limit: finalConfig.maxRequests,
      remaining: 0,
      reset: current.resetTime,
      message: finalConfig.message,
    };
  }

  // Increment count
  current.count++;

  return {
    success: true,
    limit: finalConfig.maxRequests,
    remaining: finalConfig.maxRequests - current.count,
    reset: current.resetTime,
  };
}

/**
 * Get client identifier from request
 * @param request - Next.js request object
 * @returns Client identifier
 */
export function getClientIdentifier(request: NextRequest): string {
  // Try to get real IP from various headers
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  const ip = forwarded?.split(",")[0] || realIp || cfConnectingIp || "unknown";

  return ip;
}

/**
 * Rate limiting middleware for API routes
 * @param request - Next.js request object
 * @param config - Rate limiting configuration
 * @returns Rate limit result
 */
export async function apiRateLimit(
  request: NextRequest,
  config: Partial<RateLimitConfig> = {}
): Promise<RateLimitResult> {
  const identifier = getClientIdentifier(request);
  return await rateLimit(identifier, config);
}

/**
 * Strict rate limiting for sensitive operations (login, password reset, etc.)
 */
export const strictRateLimit: Partial<RateLimitConfig> = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // 5 attempts per window
  message: "Too many attempts, please try again later",
};

/**
 * Standard rate limiting for general API operations
 */
export const standardRateLimit: Partial<RateLimitConfig> = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // 100 requests per window
  message: "Too many requests, please try again later",
};

/**
 * Loose rate limiting for read operations
 */
export const looseRateLimit: Partial<RateLimitConfig> = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 500, // 500 requests per window
  message: "Too many requests, please try again later",
};
