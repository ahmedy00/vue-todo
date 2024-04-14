import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import List from '../List.vue'

describe('List', () => {
    it('renders properly', () => {
        const wrapper = mount(List)
        expect(wrapper.findComponent('[data-test="list"]').exists()).toBe(true)
    })
    it('renders todo items as a list', () => {
        const wrapper = mount(List)

    })
})