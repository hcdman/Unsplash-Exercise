import { Link } from 'react-router-dom';
import { IPhoto } from '../types/Iphoto';
import '../styles/showPhoto.css';

interface ShowPhotoProps {
    photo: IPhoto;
}

const ShowPhoto = ({ photo }: ShowPhotoProps) => {
    return (
        <article className="card shadow card-container"> {/* Use the class from the CSS file */}
            <div className="card-img">
                <Link to={`/photos/${photo.id}`}>
                    <img
                        src={photo.urls.regular}
                        className="img-fluid rounded-top"
                        alt={photo.alt_description || 'No description'}
                    />
                </Link>
            </div>
            <div className="card-body d-flex align-items-center">
                <img
                    className="rounded-circle me-3"
                    src={photo.user.profile_image.large}
                    alt="profile img"
                    style={{ width: '40px', height: '40px' }}
                />
                <div className="flex-column text-truncate">
                    <span className="fw-bold text-truncate">{photo.user.name}</span>
                </div>
            </div>
        </article>
    );
};

export default ShowPhoto;
