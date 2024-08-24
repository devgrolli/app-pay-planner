import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import { verifySessionAuth } from "@/service/profile";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  userName: string | null;
  updateAuthState: () => void;
  startSessionValidation: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isLoading: false,
  userName: "Fulano",
  updateAuthState: () => {},
  startSessionValidation: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [sessionId, setSessionId] = useState<string | null>(
    localStorage.getItem("sessionId")
  );
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("userId")
  );
  const [userName, setUserName] = useState<string | null>(
    localStorage.getItem("userName")
  );

  const updateAuthState = useCallback(() => {
    const keys = ["token", "sessionId", "userId", "userName"];
    const setters = [setToken, setSessionId, setUserId, setUserName];

    keys.forEach((key, index) => {
      const value = localStorage.getItem(key);
      if (value) {
        setters[index](value);
      } else {
        setters[index](null);
      }
    });

    if (localStorage.getItem("token") && localStorage.getItem("sessionId") && localStorage.getItem("userId")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    updateAuthState();
    startSessionValidation();

    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === "token" ||
        e.key === "sessionId" ||
        e.key === "userId" ||
        e.key === "userName"
      ) {
        updateAuthState();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [updateAuthState]);

  const startSessionValidation = useCallback(() => {
    const fetchToken = async () => {
      if (!token || !sessionId || !userId) {
        setIsLoggedIn(false);
        setIsLoading(false);
        return;
      }
      try {
        const response = await verifySessionAuth(token, sessionId, userId);
        setIsLoggedIn(response.data.isValid);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchToken();
  }, [token, sessionId, userId]);

  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      isLoading,
      userName,
      updateAuthState,
      startSessionValidation,
    }),
    [isLoggedIn, isLoading, userName, updateAuthState, startSessionValidation]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;