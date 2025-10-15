export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  user: User;
  expires: string;
}

export interface AuthError {
  type:
    | "CredentialsSignin"
    | "CallbackRouteError"
    | "Configuration"
    | "AccessDenied"
    | "Verification";
  message: string;
}
