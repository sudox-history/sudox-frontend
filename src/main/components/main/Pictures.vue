<template>
  <div class="pictures">
    <!--suppress HtmlUnknownTarget -->
    <img id="desktop" :src="lang['pictures_desktop']" alt="">
    <!--suppress HtmlUnknownTarget -->
    <img id="dialogs" :src="lang['pictures_dialogs']" alt="">
    <!--suppress HtmlUnknownTarget -->
    <img id="chat" :src="lang['pictures_chat']" alt="">
  </div>
</template>

<script>
  export default {
    name: "Pictures",
    props: {
      lang: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .pictures {
    position: absolute;
  }

  #desktop {
    z-index: 0;
    height: 700px;

    display: block; /* Necessary */
  }

  #dialogs {
    position: absolute;
    z-index: 1;
    left: 10%;
    bottom: -15%;
    height: 600px;
  }

  #chat {
    position: absolute;
    z-index: 2;
    left: 30%;
    bottom: -5%;
    height: 600px;
  }
</style>