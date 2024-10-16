import { useParams } from 'react-router-dom';
import { useGetPhoto } from '../hook/useGetPhoto';
import ShowDetailPhoto from '../components/ShowDetailPhoto';

const PhotoDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { photo, loading } = useGetPhoto(id!);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!photo) {
        return <div>Error loading photo or photo not found</div>;
    }

    return (
        <>
            <ShowDetailPhoto photo={photo} />
        </>
    );
};

export default PhotoDetail;
