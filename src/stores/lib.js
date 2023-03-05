import axios from "axios";
import { defineStore } from "pinia";
export const useLibStore = defineStore("category", {
    state: () => ({
        category: null
    }),
    getters: {
        categories: (state) => state.category
    },
    actions: {
        async getCategories() {
            try {
                const response = await axios.get('/api/categories')
                this.category = response.data
            } catch (error) {
                console.log(error.response)
                return []

            }
        }
    }

})