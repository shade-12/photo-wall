import axios from 'axios';

const baseUrl = (process.env.NODE_ENV === 'production') ?
                process.env.REACT_APP_PROD_BASE_URL :
                process.env.REACT_APP_DEV_BASE_URL;

const uploadPhoto = (file: File) :Promise<any> => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('photo', file);
        axios
            .post(`${baseUrl}/photos/upload`, formData, {
                headers: {
                    'Accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => resolve(res))
            .catch(err => reject(JSON.stringify(err)));
    });
};

export default uploadPhoto;