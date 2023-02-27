<script setup>
import { useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue';
const authStore = useAuthStore()


// onMounted(async () => {
//     await authStore.getUser()
// })
</script>


<template>
    

<div class="hero min-h-screen" style="background-image: url(https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio amet nisi voluptatum et asperiores .</p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    <!-- <div v-if="authStore.user">
                {{ authStore.user }}
            </div>
            <div v-else>
                <p>unauthentified</p>
            </div> -->
</template>