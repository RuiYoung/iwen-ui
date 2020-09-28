<template>
 <div>
    <iwen-button>默认按钮</iwen-button>
    <iwen-button type="primary">主要按钮</iwen-button>
    <iwen-button type="success">成功按钮</iwen-button>
    <iwen-button type="info">信息按钮</iwen-button>
    <iwen-button type="warning">警告按钮</iwen-button>
    <iwen-button type="danger">危险按钮</iwen-button>
    <iwen-icon icon="edit"></iwen-icon>
    <iwen-icon icon="sousuo"></iwen-icon>
    <iwen-button type="success" icon="sousuo" icon-position="left">搜索A</iwen-button>
    <iwen-button type="success" icon="sousuo" icon-position="right">搜索B</iwen-button>
    <iwen-button type="success" loading>加载中</iwen-button>
 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>


