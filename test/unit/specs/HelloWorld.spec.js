import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(HelloWorld)

    const header = wrapper.find('.hello h1')

    expect(header.text()).toEqual('Welcome to Your Vue.js App')
  })
})
