<template>
  <div class="footer">
    <img alt="" class="item" id="vk" src="../../../assets/icons/vk.svg">
    <img alt="" class="item margin" id="twitter" src="../../../assets/icons/twitter.svg">
    <img alt="" class="item margin" id="facebook" src="../../../assets/icons/facebook.svg">
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
    padding: 5vh 0 5vh 0;
  }

  .item {
    cursor: pointer;
    user-select: none;
  }

  .margin {
    margin-left: 40px;
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