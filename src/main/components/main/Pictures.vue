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
    top: 10%;
    right: calc(-10% - 200px);
  }

  #desktop {
    z-index: 0;
    height: 700px;
  }

  #dialogs {
    position: absolute;
    z-index: 1;
    left: 10%;
    bottom: -20%;
    height: 600px;
  }

  #chat {
    position: absolute;
    z-index: 2;
    left: 30%;
    bottom: -10%;
    height: 600px;
  }

  @media screen and (max-width: 1700px) {
    .pictures {
      right: calc(-25% - 200px);
    }
  }

  @media screen and (max-width: 1500px) {
    .pictures {
      right: calc(-35% - 200px);
    }
  }

  @media screen and (max-width: 1400px) {
    .pictures {
      right: calc(-45% - 200px);
    }
  }

  @media screen and (max-width: 1300px) {
    .pictures {
      display: none;
    }
  }
</style>