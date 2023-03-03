
<script setup>
import Comment from '@/components/common/Comment.vue';
import Reactions from '@/components/common/Reactions.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getPost, commentPost } from '@/api/posts'
import { getElapsedTime } from '@/helpers/date';
import InputSend from '@/components/common/inputSend.vue';
const route = useRoute();
const post = ref(null)
const availableReactions = ['👍', '❤️', '🤩', '👎'];

async function handleComment(value) {

    const commentResult = await commentPost({
        post: post.value.id,
        content: value
    })

    if (commentResult) {
        post.value.comments.push(commentResult)
    }
}
onMounted(async () => {
    post.value = await getPost(route.params.id)
})
</script>
<template>
    <!-- Card-->
    <article v-if="post"
        class="mb-4 break-inside p-6 md:py-28 md:px-32 lg:px-64 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
        <div class="flex pb-6 items-center justify-between">
            <div class="flex">
                <a class="inline-block mr-4" href="#">
                    <img class="rounded-full max-w-none w-14 h-14" :src="post.owner.image" />
                </a>
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
        <h2 class="text-3xl font-extrabold">
            {{ post.title }}
        </h2>
        <div class="py-4 flex flex-col items-center">
            <a class="" href="#">
                <img class="rounded-lg max-h-[29rem]" :src="post.image" />
            </a>
            <a class="btn m-3">Download Book</a>
        </div>
        <div class="rounded-2xl bg-blue-500 p-4 mb-4 ">
            <h3 class="text-2xl font-semibold capitalize">description :</h3>
            <p class="ml-6">
                {{ post.description }}
            </p>
        </div>
        <div class=" rounded-2xl bg-gray-50 shadow-md p-2">
            <div class="py-2">
                <Reactions :count="post.reactions_count" :available-reactions="availableReactions"></Reactions>
            </div>
            <hr class="h-0.5 bg-slate-300 rounded mb-2">
            <InputSend @send="handleComment"></InputSend>
            <!-- Comments content -->
            <div class="pt-6">
                <Comment v-for="comment in post.comments" :comment="comment"></Comment>

            </div>
        </div>
        <!-- End Comments content -->
    </article>
    <!-- Close Card -->
</template>