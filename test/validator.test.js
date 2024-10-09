import { mount } from '@vue/test-utils'
import Component from './component'

describe('Component', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
