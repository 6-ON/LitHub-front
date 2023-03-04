<script setup>
import { uploadAsset } from '@/api/cloudinary';
import { createGroup } from '@/api/groups';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const group = ref({
    title: '',
    description: '',
    image: null,
    image_url: ''
})
const selectedImage = computed(() => {
    if (group.value.image ?? false) {
        return URL.createObjectURL(group.value.image)
    }
})
function changeCreateImage(e) {
    group.value.image = e.target.files[0]
}
async function handleCreate() {
    console.log(group.value);
    const uploadResult = await uploadAsset(group.value.image)
    if (uploadResult) {
        group.value.image_url = uploadResult.secure_url
        const createResult = await createGroup(group.value)
        if (createResult) {
            router.push(`/group/${createResult.id}`)
        }
    }
}
</script>
<template>
    <input type="checkbox" id="create-group-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box scrollbar-none">
            <h2 class="text-center text-xl uppercase  font-semibold mb-2">create a group</h2>
            <form @submit.prevent="handleCreate" class="flex flex-col gap-3 items-center">

                <img :src="selectedImage" class="rounded-full bg-slate-400 w-32 h-32 object-cover">
                <label for="create-group-image" class="btn">Select image</label>
                <input id="create-group-image" type="file" hidden @change="changeCreateImage">
                <label class="input-group input-group-vertical">
                    <span>Title</span>
                    <input type="text" placeholder="info@site.com" v-model="group.title" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical">
                    <span>Description</span>
                    <textarea class="textarea textarea-bordered resize-none" v-model="group.description"
                        placeholder="our group does..."></textarea>
                </label>

            </form>
            <div class="modal-action">
                <label for="create-group-modal" class="btn">Close</label>
            </div>
        </div>
    </div>
</template>