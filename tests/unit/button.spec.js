import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/packages/Button/src/button.vue'

describe('Button.vue', () => { //划分作用域
  // 测试用例
  it('1+1是否等于2', ()=> {
    expect(1+1).to.eq(2)
  })
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).to.include(msg)
  // })
})
