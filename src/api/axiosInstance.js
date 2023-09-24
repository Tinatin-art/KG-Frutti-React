import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        "Content-Type": "application/json",
    }
});

axiosInstance.interceptors.request.use(
    config => {

        if (!config?.headers) {
            throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
        }
    
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        return config;
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response.status === 401  && err.config && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const response = await axiosInstance.get("refresh", {withCredentials: true});
                localStorage.setItem('token', response.data.accessToken);
                return instance.request(originalConfig);
            } catch (_error) {
                console.log("Unauthorized");
            }
        }

        throw err;
    }
);

export default axiosInstance;
