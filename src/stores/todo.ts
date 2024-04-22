import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'


type Item = {
    id: string
    desc: string
    status: string
}
export const useTodoStore = defineStore('todo', {
    persist: {
        enabled: true,
    },
    state: () : { todos: Item[] } => {
        return {
            todos: []
        }
    },
    actions: {
        addItem (item: string): void {
            this.todos.push({ id: uuidv4(), desc: item, status: 'pending' })
        },

        updateDesc (id: string, desc: string) {
            this.todos.find((item: Item) => {
                if (item.id === id) {
                    item.desc = desc
                }
            })
        },

        changeStatus (id: string): void {
            this.todos.find((item: Item) => {
                if (item.id === id) {
                    item.status = 'done'
                }
            })
        },

        reopenItem (id: string): void {
            this.todos.find((item: Item) => {
                if (item.id === id) {
                    item.status = 'pending'
                }
            })

        },

        removeItem (id: string): void {
            this.todos = this.todos.filter(item => item.id !== id)
        },

        clearList (): void {
            this.todos = []
        }
    },
})
