import AxiosClient from "./axios/axiosClient"

export const ApiGetListImage = async (page: number) => {
    const res = await AxiosClient.get(`/photos?page=${page}&per_page=8`)
    return res.data;
}