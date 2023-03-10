<script setup>

import { ref } from 'vue';
import { sendGroupMessage,deleteGroup } from '@/api/groups';
import Member from '@/components/common/Member.vue';
import Message from '@/components/common/Message.vue';
import InputSend from '@/components/common/inputSend.vue';
import { useRoute,useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const group = ref(route.params.group)

async function handleSend(data) {
    const sendingResponse = await sendGroupMessage({
        content: data,
        group_id: route.params.id
    })

    if (sendingResponse) {
        group.value.messages.push(sendingResponse);
    }
}
async function confirmDelete(){
    const result = await deleteGroup(route.params.id)
    if (result) {
        router.push('/groups')
    }
}

</script>

<template>
    <div class="lg:px-48 md:px-24 ">
        <img class="w-full md:h-[30rem] object-cover rounded-b-2xl" :src="group?.image" :alt="group?.slug">
    </div>
    <h1 class="mt-3 text-3xl text-center text-blue-500 font-bold">
        {{ group?.title }}
        <label for="group-info-modal" class="badge ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </label>
    </h1>

    <!-- group info modal -->
    <input type="checkbox" id="group-info-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <h2 class="text-xl font-bold">{{ group?.title }}</h2>
            <h3 class="font-semibold text-lg">Info:</h3>
            <img :src="group?.owner.image" :alt="group?.owner.username" class="rounded-full w-14 h-14">
            <h4 class="text-md text-gray-500">@{{ group?.owner.username }}<span class="badge">Owner</span></h4>

            <h3 class="text-xl font-semibold mt-4 capitalize">description</h3>
            <p class="py-4">{{ group?.description }}</p>
            <div class="modal-action">
                <label for="delete-confirmation-modal" class="btn btn-error">Remove</label>
                <label for="group-info-modal" class="btn">Close</label>
            </div>
        </div>
    </div>


    <input type="checkbox" id="delete-confirmation-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box p-4">
            <h2 class="text-3xl text-center mb-6">Confirmation</h2>
            <h2 class="text-xl text-center p-2">Are you sure you want to delete your <strong>own group</strong> ?</h2>
            <div class="modal-action">
                <button @click="confirmDelete" for="delete-confirmation-modal" class="btn btn-error">Confirm</button>
                <label for="delete-confirmation-modal" class="btn">cancel</label>
            </div>

        </div>
    </div>


    <div class="w-full flex max-md:flex-col">
        <div class="flex-1 p-5">
            <!-- members -ections -->
            <div class="border rounded-md p-3">
                <div class="collapse-title text-xl font-medium">
                    Members | {{ group?.members_count }}
                </div>
                <div class="flex flex-col gap-3 max-h-[30rem] overflow-y-scroll">
                    <Member v-for="member in group?.members" :member="member"></Member>
                </div>
            </div>

        </div>
        <div class="flex-1 p-5">
            <!-- chat-section -->
            <h3 class="text-2xl font-bold p-4 max-sm:text-center">Chats</h3>
            <div class="flex flex-col mb-3 max-h-[30rem] overflow-y-scroll p-3">
                <Message v-for="message in group?.messages" :message="message"></Message>
            </div>
            <InputSend placeholder="send Message" @send="handleSend"></InputSend>

        </div>
    </div>
</template>