import { config,  mount } from '@vue/test-utils'
import Counter from '../components/Counter.js'
import expect from 'expect'

config.showDeprecationWarnings = false

describe("Counter", () => {
  it("defaults to count of 0", () => {
    let wrapper = mount(Counter)

    expect(wrapper.vm.count).toBe(0)
  })
})