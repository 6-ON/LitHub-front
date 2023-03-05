<script setup>
import { uploadAsset } from '@/api/cloudinary';
import { computed, ref } from 'vue';
import { createPost } from '@/api/posts';
import { useLibStore } from '@/stores/lib';
import { useRouter } from 'vue-router';
const router = useRouter()
const libStore = useLibStore()


const post = ref({
    title: '',
    description: '',
    image: null,
    image_url: '',
    category: null,
    attachment: null,
    attachment_url: ''
})

const selectedImage = computed(() => {
    if (post.value.image ?? false) {
        return URL.createObjectURL(post.value.image)
    }
})

function changeImage(e) {
    post.value.image = e.target.files[0]
}
function changeAttachment(e) {
    post.value.attachment = e.target.files[0]
}
async function handleCreate() {
    console.log(post.value);
    const uploadImage = await uploadAsset(post.value.image)
    const uploadAttachment = await uploadAsset(post.value.attachment)

    if (uploadImage && uploadAttachment) {
        post.value.image_url = uploadImage.secure_url
        post.value.attachment_url = uploadAttachment.secure_url
        const createResult = await createPost(post.value)
        if (createResult) {
            router.push(`/book/${createResult.id}`)
        }
    }
}
</script>
<template>
    <input type="checkbox" id="create-post-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box scrollbar-none">
            <h2 class="text-center text-xl uppercase  font-semibold mb-2">create a group</h2>
            <form @submit.prevent="handleCreate" class="flex flex-col gap-3 items-center">

                <img :src="selectedImage" class="rounded-full bg-slate-400 w-32 h-32 object-cover">
                <label for="create-post-image" class="btn">Select image</label>
                <input id="create-post-image" type="file" hidden @change="changeImage">
                <div class="flex gap-3">
                    <label for="create-post-attachment" class="btn">Select book pdf</label>
                    <input id="create-post-attachment" type="file" hidden @change="changeAttachment">

                    <button :class="{ 'btn-disabled': !post.attachment }" @click="previewBook" class="btn">preview
                        book</button>
                </div>
                <select class="select w-full max-w-xs" v-model="post.category">
                    <option :value=null disabled selected>Select a Category</option>
                    <option :value="category.id" v-for="category in libStore.categories">{{ category.label }}</option>
                </select>
                <label class="input-group input-group-vertical">
                    <span>Title</span>
                    <input type="text" placeholder="Deep Work" v-model="post.title" class="input input-bordered" />
                </label>
                <label class="input-group input-group-vertical">
                    <span>Description</span>
                    <textarea class="textarea textarea-bordered resize-none" v-model="post.description"
                        placeholder="this book..."></textarea>
                </label>

            </form>
            <div class="modal-action">
                <label for="create-post-modal" class="btn">Close</label>
            </div>
        </div>
    </div>
</template>