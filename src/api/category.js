import axios from "axios";

async function createCategory(data) {
    try {
        const response = await axios.post('/api/category',{
            label: data.label
        })
        return response.data
    } catch (error) {
        console.log(error.response);
        return false
    }
}


export { createCategory }