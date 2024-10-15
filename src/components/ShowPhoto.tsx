import { Link } from 'react-router-dom';
import { IPhoto } from '../types/Iphoto';

interface ShowPhotoProps {
    photo: IPhoto;
}

const ShowPhoto = ({ photo }: ShowPhotoProps) => {
    return (
        <div style={{ margin: '10px' }}>
            <Link to={`/photos/${photo.id}`}>
                <img
                    className='rounded'
                    src={photo.urls.thumb}
                    alt={photo.alt_description || 'No description'}
                    style={{ width: '230px', cursor: 'pointer' }}
                />
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={photo.user.profile_image.small}
                    alt={photo.user.name}
                    style={{ width: '30px', borderRadius: '50%' }}
                />
                <span
                    style={{
                        marginLeft: '5px',
                        display: 'inline-block',
                        color: 'gray',
                        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
                    }}
                >
                    {photo.user.name}
                </span>
            </div>
        </div>
    );
};

export default ShowPhoto;
