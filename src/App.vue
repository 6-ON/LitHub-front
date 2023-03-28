<script setup>
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore()
onBeforeMount(() => {
    authStore.user ?? authStore.getUser()
})
</script>

<template>
    <Navbar></Navbar>
    <RouterView></RouterView>
</template>
