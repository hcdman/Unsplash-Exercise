
export interface IPhoto {
    id: string;
    alt_description: string | null;
    urls: {
        thumb: string;
        full: string;
    };
    user: {
        name: string;
        profile_image: {
            small: string;
        };
    };
}
