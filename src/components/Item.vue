<script setup lang="ts">
import { nextTick, ref } from 'vue'

const props = defineProps(['item'])

const emit = defineEmits(['updateDesc', 'markAsDone', 'removeItem'])

const isEditing = ref(false)

const inputRef = ref<HTMLInputElement | null>(null)

const model = ref(props.item.desc)

const editItem = async () => {
  isEditing.value = true
  await nextTick()
  inputRef.value?.focus()
}

const applyEdit = (desc: string) => {
  isEditing.value = false
  emit('updateDesc', props.item.id, desc)
}

const cancelEdit = () => {
  isEditing.value = false
}

const markAsDone = (id: string) => {
  emit('markAsDone', id)
}

const removeItem = (id: string) => {
  emit('removeItem', id)
}

</script>

<template>
  <div class="border border-primary rounded-lg shadow my-2" :class="{'bg-green-700': item.status === 'done'}">
    <div class="p-4 flex flex-row items-center justify-between">
      <h5 v-if="!isEditing" class="text-xl font-semibold tracking-tight truncate lg:w-[75%] w-[60%]">{{ item.desc }}{{ item.status === 'done' ? ' (DONE)' : '' }}</h5>
      <div v-else class="lg:w-[75%] w-[60%]">
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <input @keydown.enter="applyEdit(model)" ref="inputRef" v-model="model" class="text-xl font-semibold tracking-tight w-[100%] focus:p-1 focus:border rounded focus:border-primary focus:outline-none truncate" />
          <button @click="applyEdit(model)" type="submit" class=" text-green-700 absolute end-10 top-[2.5px] focus:outline-none font-small rounded-lg text-sm p-1">
            <mdicon name="check"></mdicon>
          </button>
          <button @click="cancelEdit" type="submit" class=" text-red-700 absolute end-2 top-[2.5px] focus:outline-none font-small rounded-lg text-sm p-1">
            <mdicon name="close"></mdicon>
          </button>
        </div>
      </div>
      <div>
        <button v-if="item.status !== 'done'" @click="editItem" type="button" class="text-white bg-primary focus:outline-none rounded-lg text-sm sm:p-1 p-0.5 mx-1 text-center">
          <mdicon name="pencil-outline"></mdicon>
        </button>
        <button v-if="item.status !== 'done'" @click="markAsDone(item.id)" type="button" class="text-white bg-primary focus:outline-none rounded-lg text-sm sm:p-1 p-0.5 mr-1 text-center">
          <mdicon name="check"></mdicon>
        </button>
        <button @click="removeItem(item.id)" type="button" class="text-white bg-primary focus:outline-none rounded-lg text-sm sm:p-1 p-0.5 text-center">
          <mdicon name="trash-can-outline"></mdicon>
        </button>
      </div>
    </div>
  </div>
</template>
