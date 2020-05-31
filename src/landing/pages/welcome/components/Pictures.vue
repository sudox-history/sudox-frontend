<template>
  <div class="pictures">
    <div class="box">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentDesktopPicture" alt="" id="desktop" ref="desktop">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentDialogsPicture"  alt="" id="dialogs" ref="dialogs">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentChatPicture"  alt="" id="chat" ref="chat">
    </div>
  </div>
</template>

<script>
  import timeout from "../../../utils/timeout";
  import gsap from "gsap";

  const START_TIMEOUT = 300;

  export default {
    name: "Pictures",
    props: {
      strings: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.startComponent();
    },
    methods: {
      async startComponent() {
        await timeout(START_TIMEOUT);
        await this.animateDesktop();

        this.animateDialogs();
        this.animateChats();
      },

      animateDesktop() {
        return Promise.all([
          gsap.to(this.$refs.desktop,
          {duration: 0.4, opacity: 1}),

          gsap.to(this.$refs.desktop,
            {duration: 0.25, scale: 1})
        ]);
      },

      animateDialogs() {
        return Promise.all([
          gsap.to(this.$refs.dialogs,
            {duration: 0.2, opacity: 1}),

          gsap.to(this.$refs.dialogs,
            {duration: 0.3, ease: 'power4.out', bottom: '-15%'})
        ]);
      },

      animateChats() {
        return Promise.all([
          gsap.to(this.$refs.chat,
            {duration: 0.2, opacity: 1}),

          gsap.to(this.$refs.chat,
            {duration: 0.3, ease: 'power4.out', bottom: '-5%'})
        ]);
      },
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
    transform: scale(1.5);
    opacity: 0;
    z-index: 0;
    height: 650px;
  }

  #dialogs {
    position: absolute;
    bottom: -35%; /* -15% */
    left: 10%;
    opacity: 0;
    z-index: 1;
    height: 600px;
  }

  #chat {
    position: absolute;
    bottom: 15%; /* -5% */
    left: 30%;
    opacity: 0;
    z-index: 2;
    height: 600px;
  }
</style>