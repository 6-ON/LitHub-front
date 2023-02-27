<script setup>
import { onMounted, ref } from 'vue';
import { getPosts } from '@/api/posts'
import { getElapsedTime } from '@/helpers/date'

const posts = ref()

onMounted(async () => {
    posts.value = await getPosts();

})
const availableReactions = ['👍', '❤️', '🤩', '👎'];

</script>

<template>
    <div class="box-border grid mx-4 gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="post in posts"
            class="mb-4 p-6 rounded-xl bg-gray-50 hover:shadow-lg dark:bg-slate-800 flex flex-col">
            <div class="flex pb-6 items-center justify-between">
                <div class="flex">
                    <RouterLink to="#" class="inline-block mr-4" href="#">
                        <img class="rounded-full max-w-none w-14 h-14"
                            :src="post.owner.image" />
                    </RouterLink>
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <a class="inline-block text-lg font-bold mr-2" href="#">{{ post.owner.username }}</a>
                        </div>
                        <div class="text-slate-500 dark:text-slate-300">
                            {{ getElapsedTime(post.created_at) }}
                        </div>
                    </div>
                </div>
            </div>
            <RouterLink to="#">
                <img :src="post.image" :alt="post.slug" srcset="" class="rounded-3xl">
            </RouterLink>

            <h3 class="text-3xl font-bold ml-5 mt-3 flex items-end gap-1">
                <RouterLink to="#" class="hover:underline">
                    {{ post.title }}
                </RouterLink>
                <RouterLink to="#" class="badge badge-primary">{{ post.category.label }}</RouterLink>
            </h3>
            <p class="text-xl ml-5 mt-3">
                {{ post.description }}
            </p>
            <div class="flex mt-5 gap-3">
                <div class="dropdown dropdown-top dropdown-hover w-fit">
                    <label tabindex="0">
                        <svg class="w-8" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                                fill-rule="evenodd"></path>
                        </svg>
                        <span class="badge">{{ post.reactions_count }}</span>
                    </label>
                    <div class="dropdown-content dropdown-top menu p-2 shadow bg-base-100 rounded-box">
                        <ul tabindex="0" class="flex flex-row text-2xl">
                            <li v-for="reaction, index in availableReactions" :key="index">
                                <a>{{ reaction }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <svg class="w-8" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                            fill-rule="evenodd"></path>
                    </svg>
                    <span class="badge">{{ post.comments_count }}</span>
                </div>
            </div>
        </article>
    </div>
</template>