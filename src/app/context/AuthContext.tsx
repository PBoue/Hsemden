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

    // Always start with false for consistent SSR/client initial render
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    // After hydration, check sessionStorage
    useEffect(() => {
        if (!requireAuth) {
            setIsAuthenticated(true);
        } else {
            const stored = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
            setIsAuthenticated(stored);
        }
        setIsHydrated(true);
    }, [requireAuth]);

    // Sync to sessionStorage when auth state changes (only after hydration)
    useEffect(() => {
        if (isHydrated) {
            if (isAuthenticated && requireAuth) {
                sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
            } else if (!isAuthenticated) {
                sessionStorage.removeItem(AUTH_STORAGE_KEY);
            }
        }
    }, [isAuthenticated, requireAuth, isHydrated]);

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
