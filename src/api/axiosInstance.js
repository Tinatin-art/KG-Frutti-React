import axios from "axios";

const name = () => {
    let headers = {
        "X-Custom-Header": "foobar",
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json",
    };

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3001/',
        timeout: 0,
        headers
    });

    // axiosInstance.interceptors.response.use(
	// 	(response) =>
	// 		new Promise((resolve) => {
	// 			resolve(response);
	// 		}),
	// 	(error => {
	// 		if (!error.response) {
	// 			return new Promise((resolve, reject) => {
	// 				reject(error);
	// 		});
	// 	}

			
	//     })
    // );

    return axiosInstance;
};

export default name;

   


