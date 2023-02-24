import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null
    }),
    getters: {
        user: (state) => state.authUser

    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser() {
            this.getToken()
            try {
                const response = await axios.get('/api/user')
                this.authUser = response.data
            } catch (error) {
                console.log(error.response)
            }
        },
        async login(data) {
            this.getToken()
            try {
                await axios.post('/login',{
                    email: data.email,
                    password: data.password
                })
                this.router.push('/')
            } catch (error) {
                console.log(error.response)
            }
        }
    }
})