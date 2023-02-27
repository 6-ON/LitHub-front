<script setup>
import { useAuthStore } from '@/stores/auth';
import { RouterLink } from 'vue-router';

const authStore = useAuthStore()
</script>



<template>
    <div class="top-0 navbar bg-base-100 bg-opacity-40 backdrop-blur">
        <div class="">
            <RouterLink to="/">
                <img class="h-12" src="@/assets/image/logo.png" alt="Logo">
            </RouterLink>
        </div>
        <div class="flex-1 justify-center">
            <ul class="flex gap-4 font-semibold">
                <li> <RouterLink exact-active-class="text-sky-600" to="/books">Books</RouterLink> </li>
                <li> <RouterLink exact-active-class="text-sky-600" to="/groups">Groups</RouterLink> </li>
        </ul>
    </div>
    <div class="flex-none">
        <!-- <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="badge badge-sm indicator-item">8</span>
                    </div>
                </label>
                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div class="card-body">
                                <span class="font-bold text-lg">8 Items</span>
                                <span class="text-info">Subtotal: $999</span>
                                                                    <div class="card-actions">
                                                                        <button class="btn btn-primary btn-block">View cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <!-- guest -->
                        <svg v-if="authStore.user ?? true" aria-hidden="true" fill="none" stroke="currentColor"
                            stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <!-- authentified -->
                        <img v-else :src="authStore.user.image" />
                    </div>
                </label>
                <ul tabindex="0"
                    class="font-mono menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <div v-if="authStore.user ?? true">
                        <li>
                            <RouterLink to="/login">Login</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/register">Register</RouterLink>
                        </li>
                    </div>
                    <div v-else>
                        <li>
                            <RouterLink to="/profile" class="justify-between">
                                profile
                            </RouterLink>
                        </li>
                        <li><button @click="authStore.logout()">Logout</button></li>
                </div>
            </ul>
        </div>
    </div>
</div></template>