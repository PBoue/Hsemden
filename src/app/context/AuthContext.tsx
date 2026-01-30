import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
    useCallback,
} from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    requireAuth: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'presentation_authenticated';

export function AuthProvider({ children }: { children: ReactNode }) {
    const requireAuth = import.meta.env.VITE_REQUIRE_AUTH !== 'false';

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        if (!requireAuth) return true;
        // Check sessionStorage on mount
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
        }
        return false;
    });

    // Sync to sessionStorage when auth state changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isAuthenticated && requireAuth) {
                sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
            } else if (!isAuthenticated) {
                sessionStorage.removeItem(AUTH_STORAGE_KEY);
            }
        }
    }, [isAuthenticated, requireAuth]);

    const login = useCallback(() => {
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        setIsAuthenticated(false);
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(AUTH_STORAGE_KEY);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, requireAuth, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
