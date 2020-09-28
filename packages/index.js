//插件的入口
import Button from "./Button/index";
import Icon from "./Icon/index";

// 存储组件列表
const components = [
    Button,
    Icon
]
const install = (Vue)=>{
    //require.context() 
    // Vue.component(Button.name,Button);
    // Vue.component(Icon.name,Icon)
//    const requireComponent = require.context(".",true,/\.vue/);//["./Button.vue"]
//    requireComponent.keys().forEach(fileName=>{
//         const config = requireComponent(fileName);
//        Vue.component(config.default.name,config.default)
//    })
    // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
export default {
    install,
    Button,
    Icon
}