<script setup>
import ProfileElement from '@/components/form/ProfileElement.vue';
import { useAuthStore } from '@/stores/auth';
import { ref, computed } from 'vue';
import { uploadAsset } from '@/api/cloudinary'

const authStore = useAuthStore()


// const updates = computed(() => {
//     return {
//         email: authStore.user?.email,
//         username: authStore.user?.username,
//         password: ''
//     }
// })

async function handleUpdate(name, value) {
    const data = {}
    data[name] = value
    const updateResponse = await authStore.updateProfile(data)
    if (updateResponse) {
        // show something
    }
}

async function confirmImage(e) {
    const image = e.target.files[0]
    if (confirm('edit photo ?')) {
        const uploadingResult = await uploadAsset(image)

        if (uploadingResult) {
            const data = { image: uploadingResult.secure_url }
            const updateResponse = await authStore.updateProfile(data)
            if (updateResponse) {
                // show something
            }
        }
    }
}

</script>

<template>
    <section class="relative h-fit bg-slate-500 border md:mx-24 mx-5 lg:mx-72 pb-11 rounded-3xl mt-24">
        <div class="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
            <div class="relative">
                <img class="w-32 h-32 rounded-full" :src="authStore.user?.image" alt="">
                <label for="img-input" class="absolute bottom-0 right-0 bg-slate-50 p-1 rounded-full cursor-pointer">
                    <svg class="w-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </label>
            </div>
            <span class="font-mono font-semibold text-lg">@{{ authStore.user?.username }}</span>
        </div>

        <div class="flex gap-3 pt-24 flex-col items-center font-mono">

            <ProfileElement v-if="authStore.user?.username" :fill-with="authStore.user.username" placeholder="username"
                type="text" @submitted="handleUpdate" name="username"></ProfileElement>

            <ProfileElement v-if="authStore.user?.email" :fill-with="authStore.user.email" placeholder="Email" type="email"
                @submitted="handleUpdate" name="email">
            </ProfileElement>

            <ProfileElement fill-with="********" placeholder="password" type="password" name="password"
                @submitted="handleUpdate">
            </ProfileElement>


            <form class="hidden">
                <input id="img-input" type="file" class="input input-lg input-borderd input-primary" placeholder="email"
                    hidden @change="confirmImage">
            </form>
        </div>

    </section>
</template>