<template>
  <div class="footer">
    <img id="vk" class="item" src="../../res/icons/vk.svg" alt="">
    <img id="twitter" class="item item-margin" src="../../res/icons/twitter.svg" alt="">
    <img id="facebook" class="item item-margin" src="../../res/icons/facebook.svg" alt="">
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

  .item-margin {
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

  @media screen and (max-width: 500px) {
    .item {
      transform: scale(0.9);
    }
  }
</style>