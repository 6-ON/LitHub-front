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
    <div class="w-full h-screen flex flex-col justify-center items-center font-mono">
        <form @submit.prevent="">
            <RouterLink to="/">
                <img src="@/assets/image/logo.png" class="h-24 mb-3">
            </RouterLink>
            <input class="form-input" placeholder="email">
            <input class="form-input" type="password" placeholder="password">
            <span class="text-gray-800 mt-3">
                Unregistred ?
                <RouterLink class="hover:underline text-slate-600" to="/register"> Register</RouterLink>
            </span>
            <button type="submit" class="form-submit">Login</button>
        </form>
    </div>
</template>
<style scoped>
.form-input {
    @apply bg-slate-50 shadow rounded-lg w-64 h-8 p-5 placeholder-gray-600 focus:outline-slate-400 outline-none
}

.form-submit {
    @apply bg-black py-3 text-white rounded-2xl px-10 shadow-xl hover:bg-white hover:text-black active:shadow-inner mt-16
}

form {
    @apply flex flex-col items-center mx-auto gap-3 mt-6
}
</style>