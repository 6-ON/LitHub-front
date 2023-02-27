import axios from "axios";

const getPosts = async function () {
    try {
        const response = await axios.get('/api/posts');
        return response.data;
    } catch (error) {
        console.log(error.response)
        return [];

    }
}

export { getPosts };
