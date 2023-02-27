async function getGroups(params) {
    try {
        const response = await axios.get('/api/groups');
        return response.data;
    } catch (error) {
        console.log(error.response)
        return [];

    }
}

export { getGroups };