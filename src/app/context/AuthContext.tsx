import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
    useCallback,
} from 'react';
import netlifyIdentity, { User } from 'netlify-identity-widget';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initialize Netlify Identity
        netlifyIdentity.init({
            locale: 'de', // German locale
        });

        // Check for existing user
        const currentUser = netlifyIdentity.currentUser();
        if (currentUser) {
            setUser(currentUser);
        }
        setIsLoading(false);

        // Listen for login events
        netlifyIdentity.on('login', (loggedInUser) => {
            setUser(loggedInUser);
            netlifyIdentity.close();
        });

        // Listen for logout events
        netlifyIdentity.on('logout', () => {
            setUser(null);
        });

        // Listen for init events (handles page refresh with existing session)
        netlifyIdentity.on('init', (initUser) => {
            setUser(initUser);
            setIsLoading(false);
        });

        return () => {
            netlifyIdentity.off('login');
            netlifyIdentity.off('logout');
            netlifyIdentity.off('init');
        };
    }, []);

    const login = useCallback(() => {
        netlifyIdentity.open('login');
    }, []);

    const logout = useCallback(() => {
        netlifyIdentity.logout();
    }, []);

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, user, isLoading, login, logout }}
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
