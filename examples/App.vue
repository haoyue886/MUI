<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <M-Button  type="main"  size="small" icon="correct">封装成功</M-Button>
    <div style="width:500px; display:flex;justify-content: space-between;">
      <M-Badge :value="1" type="success">
        <M-Button size="small">Number类型</M-Button>
      </M-Badge>
      <M-Badge :value="100" :max="99" type="warning">
        <M-Button size="small">限制最大值</M-Button>
      </M-Badge>
      <M-Badge is-dot>
        <M-Button size="small" icon="look">小圆点</M-Button>
      </M-Badge>
      <M-Badge value="hot"  type="primary">
        <M-Button size="small" >String类型</M-Button>
      </M-Badge>   
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
