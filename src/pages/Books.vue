<script setup>
import { onMounted, ref } from 'vue';
import { getPosts } from '@/api/posts'
import { getElapsedTime } from '@/helpers/date'
import BookCard from '@/components/BookCard.vue';

const posts = ref()

onMounted(async () => {
    posts.value = await getPosts();

})


</script>

<template>
    <div class="box-border grid mx-4 gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BookCard v-for="post in posts" :post="post"></BookCard>
    </div>
</template>