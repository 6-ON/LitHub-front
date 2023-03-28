import axios from "axios";
async function getGroups() {
    try {
        const response = await axios.get('/api/groups');
        return response.data;
    } catch (error) {
        console.log(error)
        return [];

    }
}
async function getGroup(id) {
    try {
        const response = await axios.get(`/api/group/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
        return null;

    }
}
async function deleteGroup(id) {
    try {
        const response = await axios.delete(`/api/group/${id}`);
        return response.status === 204;
    } catch (error) {
        console.log(error)
        return false;

    }
}
async function sendGroupMessage(data) {
    try {
        const response = await axios.post('/api/message/', data);
        return response.data;
    } catch (error) {
        console.log(error)
        return false;

    }
}

async function joinGroup(id) {
    try {
        const response = await axios.post(`/api/group/${id}/join`);
        return response.status === 201;
    } catch (error) {
        console.log(error)
        return false;

    }
}
async function createGroup(data) {
    try {
        const response = await axios.post('/api/group', {
            title: data.title,
            description: data.description,
            image: data.image_url
        });
        return response.data;
    } catch (error) {
        console.log(error)
        return false;

    }
}


export {
    getGroups,
    getGroup,
    sendGroupMessage,
    joinGroup,
    createGroup,
    deleteGroup
};