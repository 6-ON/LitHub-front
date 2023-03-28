<script setup>
import { onMounted, ref } from 'vue';
import { getFavourites } from '@/api/posts'
import BookCard from '@/components/BookCard.vue';
const favourites = ref([]);
onMounted(async () => {
    favourites.value = await getFavourites();
})
</script>

<template>
    <div class="box-border grid mx-4 gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BookCard v-for="post in favourites" :post="post" @unfavourited="favourites = favourites.filter((p) => p.id != post.id)"/>
    </div>
</template>