import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { api } from '../lib/api';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/auth/me');
                setUser(response.data);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const signIn = async (credentials) => {
        try {
            const response = await api.post('/auth/signin', credentials);
            setUser(response.data);
            router.push('/');
        } catch (error) {
            console.error('Failed to sign in', error);
        }
    };

    const signOut = async () => {
        try {
            await api.post('/auth/signout');
            setUser(null);
            router.push('/auth/signin');
        } catch (error) {
            console.error('Failed to sign out', error);
        }
    };

    return { user, loading, signIn, signOut };
};

export default useAuth;