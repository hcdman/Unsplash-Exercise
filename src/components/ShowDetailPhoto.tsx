import { IPhoto } from "../types/Iphoto";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ShowDetailProps {
    photo: IPhoto;
}
const ShowDetailPhoto = ({ photo }: ShowDetailProps) => {
    return (
        <Card>
            <CardMedia
                sx={{ height: 2000 }}
                image={photo.urls.full}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {photo.alt_description || 'No description'}
                </Typography>

                {/* Move the div containing the image and user name outside Typography */}
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                    <img
                        src={photo.user.profile_image.small}
                        alt={photo.user.name}
                        style={{ width: '40px', borderRadius: '50%', marginRight: '10px' }}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {photo.user.name}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
export default ShowDetailPhoto