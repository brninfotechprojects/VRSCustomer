import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would be an API call
    try {
      // Simple login validation
      if (email === 'customer@gmail.com' && password === 'Customer@123') {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock user data
        const mockUser: User = {
          id: '1',
          name: 'Customer',
          email: email,
          phone: '+91 98765 43210'
        };
        
        setUser(mockUser);
        return true;
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser: User = {
        id: '1',
        name: 'Gopi Uppu',
        email: email,
        phone: '+91 98765 43210'
      };
      
      setUser(mockUser);
      return false; // Return false for other credentials
    } catch (error) {
      return false;
    }
  };

  const signup = async (name: string, email: string, phone: string): Promise<boolean> => {
    // Mock signup - in real app, this would be an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        phone
      };
      
      setUser(newUser);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}