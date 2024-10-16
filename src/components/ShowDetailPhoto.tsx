import { IPhoto } from "../types/Iphoto";
import { Card } from 'react-bootstrap';

interface ShowDetailProps {
    photo: IPhoto;
}

const ShowDetailPhoto = ({ photo }: ShowDetailProps) => {
    return (
        <Card className="shadow" style={{ marginBottom: '20px' }}>
            <Card.Img
                variant="top"
                src={photo.urls.full}
                alt={photo.alt_description || 'No description'}
                style={{ objectFit: 'cover', width: '100%' }}
            />

            <Card.Body>
                <Card.Title>Photo description</Card.Title>
                <i style={{ fontSize: '20px' }}>{photo.alt_description || 'No description'}</i>
                <hr />
                <h6>Size: {photo.width} x {photo.height}</h6>
                <hr />
                <Card.Title>Photo by</Card.Title>
                <div className="d-flex align-items-center mt-3">
                    <img
                        src={photo.user.profile_image.large}
                        alt={photo.user.name}
                        style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                    />
                    <span className="text-muted">{photo.user.name}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ShowDetailPhoto;
