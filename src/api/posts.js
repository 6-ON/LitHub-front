import axios from "axios";

const getPosts = async function () {
    try {
        const response = await axios.get('/api/posts');
        return response.data;
    } catch (error) {
        console.log(error.data)
        return [];

    }

}
const getPost = async function (id) {
    try {
        const response = await axios.get(`/api/post/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.data)
        return [];

    }
}
const commentPost = async function (comment) {
    console.log(comment);
    try {
        const response = await axios.post('/api/comment',{
            post_id :comment.post,
            content :comment.content
        })
        return response.data;
    } catch (error) {
        console.log(error.data)
        return false
    }
}

export { getPosts, getPost,commentPost };
