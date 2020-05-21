<template>
  <div class="picture">
    <!--suppress HtmlUnknownTarget -->
    <img id="chat" :src="lang['picture_chat']" alt="">
    <!--suppress HtmlUnknownTarget -->
    <img id="dialogs" :src="lang['picture_dialogs']" alt="">
    <!--suppress HtmlUnknownTarget -->
    <img id="desktop" :src="lang['picture_desktop']" alt="">
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
    right: calc(-15% - 200px);
  }

  #dialogs {
    position: absolute;
    left: 5%;
    bottom: -25%;
    height: 600px;
  }

  #chat {
    position: absolute;
    left: 20%;
    bottom: -10%;
    height: 600px;
  }

  #desktop {
    height: 700px;
  }

  @media screen and (max-width: 1600px) {
    .picture {
      right: calc(-30% - 200px);
    }
  }

  @media screen and (max-width: 1450px) {
    .picture {
      right: calc(-50% - 200px);
    }
  }

  @media screen and (max-width: 1260px) {
    .picture {
      display: none;
    }
  }
</style>