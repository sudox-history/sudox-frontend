<template>
  <div class="bottom-bar">
    <img id="vk" class="item" src="../assets/vk.svg" alt="">
    <img id="twitter" class="item" src="../assets/twitter.svg" alt="">
    <img id="facebook" class="item" src="../assets/facebook.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "BottomBar"
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    align-items: center;
    padding: 60px 0 60px 0;
  }

  .item {
    margin-right: 40px;
    cursor: pointer;
  }

  #vk {
    width: 40px;
    height: 23px;
  }

  #twitter {
    width: 28px;
    height: 23px;
  }

  #facebook {
    width: 28px;
    height: 27px;
  }
</style>