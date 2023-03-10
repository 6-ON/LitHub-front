<script setup>
import { onMounted, ref } from 'vue';
import { getPosts } from '@/api/posts'
import BookCard from '@/components/BookCard.vue';
import CreatePostModal from '@/components/CreatePostModal.vue'
import CreateCategoryModal from '@/components/CreateCategoryModal.vue'
import { useLibStore } from '@/stores/lib';
import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';
const posts = ref()
const libStore = useLibStore()
const route = useRoute()
const authStore = useAuthStore()
onMounted(async () => {
    libStore.getCategories()
    posts.value = await getPosts();

})
const selectedCategory = ref(null)
async function reloadPosts(category) {
    if (selectedCategory.value === category) {
        selectedCategory.value = null
        posts.value = await getPosts()
    }else{
        selectedCategory.value = category
        const result = await libStore.getCategoryPosts(category)
        posts.value = result.posts
    }
}

</script>

<template>
    <div class="w-full flex  overflow-x-scroll scrollbar-none p-3 gap-2 ">

        <label v-if="authStore.user?.isAdmin" for="create-category-modal"
            class="p-2 border rounded-full hover:bg-gray-300 cursor-pointer">
            <svg class="w-6" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </label>

        <button v-for="category in libStore.categories" @click="reloadPosts(category.id)" :key="category.id"
            class="px-5 py-2 border rounded-full hover:bg-gray-300" :class="{ 'bg-gray-400': selectedCategory === category.id }">
            {{ category.label }}</button>
    </div>
    <div class="box-border grid mx-4 gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BookCard v-for="post in posts" :post="post"></BookCard>
    </div>
    <CreatePostModal v-if="authStore.user?.isAdmin"></CreatePostModal>
    <CreateCategoryModal v-if="authStore.user?.isAdmin"></CreateCategoryModal>
    <div v-if="authStore.user?.isAdmin" class="fixed bottom-6 right-4">
        <label for="create-post-modal" class="btn btn-circle btn-lg">
            <svg class="w-8" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </label>
    </div>
</template>
<style></style>