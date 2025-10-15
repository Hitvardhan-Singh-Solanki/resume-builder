import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param input - The HTML string to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ["b", "i", "em", "strong", "br"],
    ALLOWED_ATTR: [],
  });
}

/**
 * Sanitizes plain text input by removing potentially dangerous characters
 * @param input - The text string to sanitize
 * @returns Sanitized text string
 */
export function sanitizeText(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/data:/gi, "") // Remove data: protocol
    .replace(/vbscript:/gi, "") // Remove vbscript: protocol
    .trim();
}

/**
 * Sanitizes URL input to ensure it's safe
 * @param input - The URL string to sanitize
 * @returns Sanitized URL string or empty string if invalid
 */
export function sanitizeUrl(input: string): string {
  if (typeof input !== "string" || input.trim() === "") {
    return "";
  }

  const trimmed = input.trim();

  // Check for dangerous protocols
  const dangerousProtocols = [
    "javascript:",
    "data:",
    "vbscript:",
    "file:",
    "ftp:",
  ];
  const hasDangerousProtocol = dangerousProtocols.some((protocol) =>
    trimmed.toLowerCase().startsWith(protocol)
  );

  if (hasDangerousProtocol) {
    return "";
  }

  // Only allow http and https protocols
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return `https://${trimmed}`;
  }

  return trimmed;
}

/**
 * Sanitizes email input
 * @param input - The email string to sanitize
 * @returns Sanitized email string
 */
export function sanitizeEmail(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  return sanitizeText(input).toLowerCase().trim();
}

/**
 * Sanitizes phone number input
 * @param input - The phone number string to sanitize
 * @returns Sanitized phone number string
 */
export function sanitizePhone(input: string): string {
  if (typeof input !== "string") {
    return "";
  }

  // Remove all non-digit characters except + at the beginning
  const cleaned = input.replace(/[^\d+]/g, "");

  // Ensure + is only at the beginning
  if (cleaned.startsWith("+")) {
    return "+" + cleaned.slice(1).replace(/\+/g, "");
  }

  return cleaned;
}

/**
 * Sanitizes a generic input string
 * @param input - The input string to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  return sanitizeText(input);
}

/**
 * Sanitizes an array of strings
 * @param input - Array of strings to sanitize
 * @returns Array of sanitized strings
 */
export function sanitizeStringArray(input: string[]): string[] {
  if (!Array.isArray(input)) {
    return [];
  }

  return input
    .filter((item): item is string => typeof item === "string")
    .map(sanitizeInput)
    .filter((item) => item.length > 0);
}
