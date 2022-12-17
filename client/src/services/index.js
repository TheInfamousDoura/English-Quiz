import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        "Accept": "application/json",
    }
});
    
export default apiClient;
