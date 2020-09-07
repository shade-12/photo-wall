import axios from 'axios';

const baseUrl = (process.env.NODE_ENV === 'production') ?
                process.env.REACT_APP_PROD_BASE_URL :
                process.env.REACT_APP_DEV_BASE_URL;

const getPhotos = () :Promise<any> => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${baseUrl}/photos`)
            .then(res => resolve(res))
            .catch(err => reject(JSON.stringify(err)));
    });
};

export default getPhotos;