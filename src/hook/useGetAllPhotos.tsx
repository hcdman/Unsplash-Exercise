import { useState, useEffect } from 'react';
import { ApiGetListImage } from '../api/apiListImages';
import { IPhoto } from '../types/Iphoto';

export const useGetAllPhotos = (page: number) => {
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchPhotos = async () => {
        setLoading(true);
        try {
            const res = await ApiGetListImage(page);
            if (res.length > 0) {
                setPhotos(prevPhotos => [...prevPhotos, ...res]);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching photos:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPhotos();
    }, [page]);
    return { photos, loading, hasMore };
};
