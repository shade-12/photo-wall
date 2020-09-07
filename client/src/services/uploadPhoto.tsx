import axios from 'axios';

const uploadPhoto = (file: File) :Promise<any> => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('photo', file);
        axios
            .post('http://localhost:8080/upload', formData, {
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