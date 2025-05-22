import { useState, useEffect } from 'react';

export interface Reservation {
    id: string;
    date: string;
    description?: string;
}

interface ReservationsState {
    reservations: Reservation[];
    loading: boolean;
}

/**
 * useReservations hook simulates fetching user's reservations.
 * It mimics an API call with a delay and reads data from localStorage.
 */
const useReservations = (): ReservationsState => {
    const [state, setState] = useState<ReservationsState>({
        reservations: [],
        loading: true,
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const storedReservations = localStorage.getItem('reservations');
            const reservations: Reservation[] = storedReservations ? JSON.parse(storedReservations) : [];
            setState({ reservations, loading: false });
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return state;
};

export { useReservations };