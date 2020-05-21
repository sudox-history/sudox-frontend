<template>
  <div class="picture">
    <!--suppress HtmlUnknownTarget -->
    <img id="desktop" :src="lang['picture_desktop']" alt="">
    <!--suppress HtmlUnknownTarget -->
    <img id="dialogs" :src="lang['picture_dialogs']" alt="">
    <!--suppress HtmlUnknownTarget -->
    <img id="chat" :src="lang['picture_chat']" alt="">
  </div>
</template>

<script>
  export default {
    name: "Picture",
    props: {
      lang: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .picture {
    position: absolute;
    top: 10%;
    right: calc(-10% - 200px);
  }

  #desktop {
    height: 700px;
    z-index: 0;
  }

  #dialogs {
    position: absolute;
    left: 10%;
    bottom: -20%;
    height: 600px;
    z-index: 1;
  }

  #chat {
    position: absolute;
    left: 30%;
    bottom: -10%;
    height: 600px;
    z-index: 2;
  }

  @media screen and (max-width: 1700px) {
    .picture {
      right: calc(-25% - 200px);
    }
  }

  @media screen and (max-width: 1500px) {
    .picture {
      right: calc(-35% - 200px);
    }
  }

  @media screen and (max-width: 1400px) {
    .picture {
      right: calc(-45% - 200px);
    }
  }

  @media screen and (max-width: 1260px) {
    .picture {
      display: none;
    }
  }
</style>