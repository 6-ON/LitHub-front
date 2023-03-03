import axios from "axios"

async function uploadAsset(file) {

    try {
        const signatureInfo = await getSinature();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('api_key', '571349964156337');
        formData.append('signature', signatureInfo.signature);
        formData.append('timestamp', signatureInfo.timestamp);
        formData.append('folder', 'Lithub');
        axios.defaults.withCredentials = false;
        const response = await axios.post('https://api.cloudinary.com/v1_1/dgmmjsxbf/auto/upload', formData)
        axios.defaults.withCredentials = true;

        return response.data
    } catch (error) {
        console.log(error.data)
    }
}
async function getSinature() {
    try {
        const response = await axios.get('/api/cloudinary/signature')
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export { uploadAsset };