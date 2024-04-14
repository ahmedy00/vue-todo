<script setup lang="ts">
import Item from '../components/Item.vue'
import { onBeforeMount, ref } from 'vue'
import { useTodoStore } from '../stores/todo'

onBeforeMount(() => {
  setScrollbarStyle()
})

const scrollClass = ref('')

const setScrollbarStyle = () => {
  if (navigator.userAgent?.includes('Firefox')) {
    scrollClass.value = 'firefox'
  } else {
    scrollClass.value = 'webkit'
  }
}

const item = ref('')
const store = useTodoStore()

const addTodo = (desc: string) => {
  store.addItem(desc)
  item.value = ''
}

const updateDesc = (id: string, desc: string) => {
  store.updateDesc(id, desc)
}

const markAsDone = (id: string) => {
  store.changeStatus(id)
}

const removeItem = (id: string) => {
  store.removeItem(id)
}

const clearList = () => {
  store.clearList()
}
</script>

<template>
  <div data-test="list" class="border-[1px] border-primary rounded py-4 px-12 h-[100%] max-w-[600px] m-auto">
    <h1 class="text-center text-2xl font-bold">TODO</h1>
    <div class="flex">
      <label for="search-dropdown" class="mb-2 sr-only dark:text-white">Your Email</label>
      <div class="relative w-full mt-8">
        <input
          v-model="item"
          @keydown.enter="addTodo(item)"
          type="search"
          class="block p-2.5 w-full z-20 text-sm rounded-lg border border-primary focus:outline-none"
          placeholder="Add Todo"
          required
        />
        <button
          @click="addTodo(item)"
          type="submit"
          class="absolute top-0 end-0 p-2.5 h-full bg-primary rounded-e-lg border border-primary text-white"
        >
          <mdicon name="plus"></mdicon>
        </button>
      </div>
    </div>
    <div :class="scrollClass" class="mt-12 pr-1 overflow-y-auto max-h-[470px]">
      <Item
        v-for="(item, index) in store.todos"
        :key="`item-${index}`"
        :item="item"
        @updateDesc="updateDesc"
        @markAsDone="markAsDone"
        @removeItem="removeItem"
      />
    </div>
    <div class="bg-primary text-white mt-8 mx-auto w-36 p-2 rounded">
      <button @click="clearList">Remove All Items</button>
    </div>
  </div>
</template>

<style scoped>

/* Firefox */
.firefox {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) #C3C3C3;
}

/* Webkit */
.webkit::-webkit-scrollbar {
  width: 12px !important;
}

.webkit::-webkit-scrollbar-track {
  background: #C3C3C3;
  border-radius: 5px;
}

.webkit::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 5px;
  margin-top: 20px;
}
</style>
