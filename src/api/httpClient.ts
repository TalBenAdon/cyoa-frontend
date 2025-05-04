import axios, {type AxiosError, type AxiosResponse } from "axios";

const httpClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    }
})


httpClient.interceptors.response.use(
    (response : AxiosResponse) => response, 
    (error : AxiosError) => {
        console.error("API error", error.response?.data || error.message);
        return Promise.reject(error)
    }
)

export default httpClient