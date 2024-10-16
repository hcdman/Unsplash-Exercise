import { useState, useEffect } from 'react';
import { IPhoto } from '../types/Iphoto';
import { useGetAllPhotos } from '../hook/useGetAllPhotos';
import ShowPhoto from '../components/ShowPhoto';

const Home = () => {
    const [page, setPage] = useState<number>(1);
    const { photos, loading, hasMore } = useGetAllPhotos(page);

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
            <div className="container py-4">
                <div className="row">
                    {photos.map((photo: IPhoto, index: number) => (
                        <div key={photo.id + index} className="col-12 col-md-6 col-lg-3 mb-4">
                            <ShowPhoto photo={photo} />
                        </div>
                    ))}
                </div>
            </div>
            {loading && <h2 className="text-center my-4">Loading...</h2>}
            {!hasMore && <p className="text-center my-4">No more photos to load.</p>}
        </>
    );
};

export default Home;
