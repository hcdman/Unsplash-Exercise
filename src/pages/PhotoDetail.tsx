import { useParams, useNavigate } from 'react-router-dom';
import { useGetPhoto } from '../hook/useGetPhoto';
import { Container } from 'react-bootstrap';
import ShowDetailPhoto from '../components/ShowDetailPhoto';

const PhotoDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { photo, loading } = useGetPhoto(id!);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!photo) {
        return <div>Error loading photo or photo not found</div>;
    }

    return (
        <Container>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <ShowDetailPhoto photo={photo} />
        </Container>
    );
};

export default PhotoDetail;
