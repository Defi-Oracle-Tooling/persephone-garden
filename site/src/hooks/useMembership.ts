import { useState, useEffect } from 'react';

interface MembershipState {
    isMember: boolean;
    loading: boolean;
}

/**
 * useMembership hook simulates checking the user's membership status.
 * It reads a membership flag from localStorage and mimics an API call delay.
 */
const useMembership = (): MembershipState => {
    const [membership, setMembership] = useState<MembershipState>({
        isMember: false,
        loading: true,
    });

    useEffect(() => {
        // Retrieve the membership flag from localStorage
        const memberFlag = localStorage.getItem('membership');
        // Simulate a delay to mimic an API call
        const timeoutId = setTimeout(() => {
            setMembership({
                isMember: memberFlag === 'true',
                loading: false,
            });
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return membership;
};

export { useMembership };