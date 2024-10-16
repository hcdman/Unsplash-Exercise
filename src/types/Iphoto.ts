
export interface IPhoto {
    id: string;
    alt_description: string | null;
    urls: {
        thumb: string;
        full: string;
        regular: string;
    };
    width: number
    height: number
    user: {
        name: string;
        profile_image: {
            large: string;
        };
    };
}
