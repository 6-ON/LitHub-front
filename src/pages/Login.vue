<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
const authStore = useAuthStore()

const form = ref({
    email: '',
    password: '',
})


</script>
<template>
    <div
        class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="relative py-3 sm:w-96 mx-auto text-center">
            <span class="text-2xl font-light ">Login to your account</span>
            <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                <div class="h-2 bg-purple-400 rounded-t-md"></div>
                <div class="px-8 py-6 ">
                    <label class="block font-semibold"> Username or Email </label>
                    <input type="text" placeholder="Email"
                        class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                    <label class="block mt-3 font-semibold"> Username or Email </label>
                <input type="password" placeholder="Password"
                    class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                <div class="flex justify-center items-baseline">
                    <button type="submit"
                        class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
        <!-- <h1 class="text-3xl">Login</h1>
            <form @submit.prevent="authStore.login(form)">
                <input type="email" v-model="form.email" class="form-input">
                <input type="password" v-model="form.password" class="form-input">
                <button type="submit" class="p-4 bg-slate-400 rounded-xl">Login</button>
            </form> -->
</template>
<style scoped>
.form-input {
    @apply bg-slate-400 rounded-lg w-48
}

form {
    @apply flex flex-col items-center mx-auto gap-3 mt-6
}</style>