import axios from "axios";

const AxiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    params: {
        client_id: import.meta.env.VITE_API_KEY
    }
})
export default AxiosClient