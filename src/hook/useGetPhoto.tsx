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
            const minLoadingDuration = 1000;
            setTimeout(() => setLoading(false), minLoadingDuration);
        }
    };

    useEffect(() => {
        fetchPhoto();
    }, []);

    return { photo, loading };
};
