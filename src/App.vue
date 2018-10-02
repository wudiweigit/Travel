<template>
  <div id="app">
      <!-- exclude="Detail" ===>> 除了Detail页面其他的页面都会被缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
