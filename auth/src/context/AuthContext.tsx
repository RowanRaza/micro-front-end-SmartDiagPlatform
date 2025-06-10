import React, {
    createContext,
    useContext,
    useEffect,
    useState
  } from "react";
  
  
  interface User {
    id: string;
    username: string;
    isAdmin: boolean;
  }
  
  type AuthContextType = {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
  };
  
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  // ---------------- Provider ----------------
  
  export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    }, []);
  
    const login = async (username: string, password: string) => {
      const response = await fakeLogin(username, password);
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user));
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem("user");
      alert("Logout...!")
    };
  
    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          logout,
          isAuthenticated: !!user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  
  
  async function fakeLogin(username: string, password: string) {
    return new Promise<{ user: User }>((resolve) =>
      setTimeout(() => resolve({ user: { id: "1", username, isAdmin: true } }), 500)
    );
  }
  