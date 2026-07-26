import { createContext, useContext, useState, type ReactNode } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  user: AuthUser | null;
  login: (email: string) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const isLoggedIn = user !== null;

  function login(email: string) {
    setUser({
      name: "you",
      email,
    });
  }

  function logout() {
    setUser(null);
  }

  const authValue: AuthContextValue = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
