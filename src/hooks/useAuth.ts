"use client";

import { useSession } from "next-auth/react";
import { useMemo } from "react";

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export interface AuthState {
  status: AuthStatus;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
  } | null;
}

export function useAuth(): AuthState {
  const { data: session, status } = useSession();

  return useMemo(() => {
    const authStatus: AuthStatus =
      status === "loading"
        ? "loading"
        : status === "authenticated"
        ? "authenticated"
        : "unauthenticated";

    return {
      status: authStatus,
      isAuthenticated: status === "authenticated",
      isLoading: status === "loading",
      user: session?.user
        ? {
            id: session.user.email || "",
            name: session.user.name || "",
            email: session.user.email || "",
            image: session.user.image || undefined,
          }
        : null,
    };
  }, [session, status]);
}
