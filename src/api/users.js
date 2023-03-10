import axios from "axios";

async function getUsers(){
    try {
        const response = await axios.get('/api/users');
        return response.data
    } catch (error) {
        console.log(error.response.data);
        return false
    }

}
export {
    getUsers
};