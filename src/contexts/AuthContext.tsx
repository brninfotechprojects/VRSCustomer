import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (emailOrPhone: string, password: string) => Promise<boolean>;
  signup: (
    name: string,
    email: string,
    phone: string,
    password: string
  ) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const persistUser = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const login = async (
    emailOrPhone: string,
    password: string
  ): Promise<boolean> => {
    try {
      const res = await fetch("http://localhost:6000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      const data = await res.json();

      if (res.ok) {
        const loggedInUser: User = {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone,
        };
        persistUser(loggedInUser);
        return true;
      } else {
        console.error("Login failed:", data.message);
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const signup = async (
    name: string,
    email: string,
    phone: string,
    password: string
  ): Promise<boolean> => {
    try {
      const res = await fetch("http://localhost:6000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();

      if (res.ok) {
        const newUser: User = {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone,
        };
        persistUser(newUser);
        return true;
      } else {
        console.error("Signup failed:", data.message);
        return false;
      }
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
