<template>
  <div class="pictures">
    <div class="box">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.desktopPicture" alt="" id="desktop">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.dialogsPicture" alt="" id="dialogs">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.chatPicture" alt="" id="chat">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Pictures",
    props: {
      strings: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .pictures {
    display: flex;
    align-items: center;
  }

  .box {
    position: absolute;
  }

  #desktop {
    display: block; /* Necessary */
    z-index: 0;
    height: 700px;
  }

  #dialogs {
    position: absolute;
    bottom: -15%;
    left: 10%;
    z-index: 1;
    height: 600px;
  }

  #chat {
    position: absolute;
    bottom: -5%;
    left: 30%;
    z-index: 2;
    height: 600px;
  }
</style>