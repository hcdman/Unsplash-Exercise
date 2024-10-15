import { useState, useEffect } from 'react';
import { IPhoto } from '../types/Iphoto';
import { ApiDetailImage } from '../api/apiDetailImage';

export const useGetPhoto = (id: string) => {
    const [photo, setPhoto] = useState<IPhoto>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchPhoto = async () => {
        try {
            const res = await ApiDetailImage(id);
            setPhoto(res);
        } catch (error) {
            console.error('Error fetching photo:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPhoto();
    }, [id]); // Add `id` to the dependency array to refetch when it changes.

    return { photo, loading };
};
