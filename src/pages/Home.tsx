import { useEffect, useState } from 'react';
import { IPhoto } from '../types/Iphoto';
import { useGetAllPhotos } from '../hook/useGetAllPhotos';
import ShowPhoto from '../components/ShowPhoto';
const Home = () => {
    const [page, setPage] = useState<number>(1);
    const { photos, loading, hasMore } = useGetAllPhotos(page)
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300) {
            if (!loading && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, hasMore]);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map((photo: IPhoto, index: number) => (
                    <ShowPhoto key={photo.id + index} photo={photo}></ShowPhoto>
                ))}
            </div>
            {loading && <h2>Loading...</h2>}
            {!hasMore && <p>No more photos to load.</p>}
        </>
    );
};
export default Home