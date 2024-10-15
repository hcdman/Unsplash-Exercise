import AxiosClient from "./axios/axiosClient"

export const ApiDetailImage = async (id: string) => {
    const res = await AxiosClient.get(`/photos/${id}`)
    return res.data;
}