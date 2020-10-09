import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '../../packages/Button/src/button.vue'

describe('Button.vue', () => { //划分作用域
  // 测试用例
  it('1+1是否等于2', ()=> {
    expect(1+1).to.eq(2)
  })

  it("测试button能否正常显示slot中的内容", ()=> {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'iwen-ui'
      }
    })
    expect(wrapper.text()).to.equal('iwen-ui')
  })
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).to.include(msg)
  // })
})
