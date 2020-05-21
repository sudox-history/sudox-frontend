<template>
  <div class="footer">
    <img id="vk" class="item" src="../res/icons/vk.svg" alt="">
    <img id="twitter" class="item" src="../res/icons/twitter.svg" alt="">
    <img id="facebook" class="item" src="../res/icons/facebook.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
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