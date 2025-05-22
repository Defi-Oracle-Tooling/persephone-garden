import { useState, useEffect } from 'react';

interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
}

const useAuth = (): AuthState => {
    const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false, loading: true });

    useEffect(() => {
        // Simulate checking authentication (e.g., fetching a token or session)
        const token = localStorage.getItem('token');
        // Simulate a delay to mimic an API call
        setTimeout(() => {
            setAuth({ isAuthenticated: !!token, loading: false });
        }, 1000);
    }, []);

    return auth;
};

export { useAuth };