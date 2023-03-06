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
const createPost = async function (data) {
    try {
        const response = await axios.post(`/api/post`, {
            title: data.title,
            description: data.description,
            image: data.image_url,
            attachment: data.attachment_url,
            category_id: data.category
        });
        return response.data;
    } catch (error) {
        console.log(error.data)
        return [];

    }
}
const commentPost = async function (comment) {

    try {
        const response = await axios.post('/api/comment', {
            post_id: comment.post,
            content: comment.content
        })
        return response.data;
    } catch (error) {
        console.log(error.data)
        return false
    }
}
const reactPost = async function (id, reaction) {

    try {
        const response = await axios.post(`/api/post/${id}/react`, {
            emoji: reaction
        })
        return response.status === 201;
    } catch (error) {
        console.log(error.data)
        return false
    }
}
const updateReactPost = async function (id, reaction) {

    try {
        const response = await axios.patch(`/api/post/${id}/react`, {
            emoji: reaction
        })
        return response.status === 202;
    } catch (error) {
        console.log(error.data)
        return false
    }
}
const removeReactPost = async function (id) {

    try {
        const response = await axios.delete(`/api/post/${id}/react`)
        return response.data;
    } catch (error) {
        console.log(error.data)
        return false
    }
}

export { getPosts, getPost, commentPost, createPost, reactPost, updateReactPost, removeReactPost };
