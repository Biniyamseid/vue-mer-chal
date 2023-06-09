import axios from 'axios';

const ENDPOINT = 'http://localhost:3003';

export const ApiWrapper = {
    get: (path) => {
        return axios.get(`${ENDPOINT}${path}`);
    }
};

// export default ENDPOINT;
