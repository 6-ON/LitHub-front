<script setup>
import { getGroups } from '@/api/groups';
import AltGroupCard from '@/components/AltGroupCard.vue';
import AlertSuccess from '@/components/common/AlertSuccess.vue';
// import GroupCard from '@/components/GroupCard.vue';
import CreateGroupModal  from '@/components/CreateGroupModal.vue'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const groups = ref();
onMounted(async () => {
    groups.value = await getGroups();
})
const joined = ref(false)
function aGroupJoined(id) {
    joined.value = true
    setTimeout(() => {
        router.push(`/group/${id}`)
    }, 1000)
}

</script>
<template>
    <h1 class="text-3xl font-bold text-center  p-8 text-sky-600">Groups <label for="create-group-modal"
            class="badge badge-info cursor-pointer">+</label></h1>

    <div class="grid grid-cols-1 p-3 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-6">
        <!-- <GroupCard v-for="group in groups" :group="group" @join-success="aGroupJoined"></GroupCard> -->
        <AltGroupCard @group-created="" v-for="group in groups" :group="group" @join-success="aGroupJoined"></AltGroupCard>
    </div>
    <CreateGroupModal></CreateGroupModal>
    <div class="toast toast-end">
        <AlertSuccess v-show="joined" message="group joined"></AlertSuccess>
    </div>
</template>