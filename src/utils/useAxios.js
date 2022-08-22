import axios from "axios";

const useAxios = async ({ url, method, body = null, headers = null }) => {
    try {
        const result = await axios[method](url, headers, body);
        
    } catch (error) {

    } finally {

    }
}