# Button组件
常用的操作按钮。
## 基础用法
基础的按钮用法。

<demo-block>
::: slot source
<button-test1></button-test1>
:::

使用type属性来定义 Button 的样式。

::: slot highlight
```html
<div>
    <iwen-button>默认按钮</iwen-button>
    <iwen-button type="primary">主要按钮</iwen-button>
    <iwen-button type="success">成功按钮</iwen-button>
    <iwen-button type="info">信息按钮</iwen-button>
    <iwen-button type="warning">警告按钮</iwen-button>
    <iwen-button type="danger">危险按钮</iwen-button>
</div>
```
:::
</demo-block>