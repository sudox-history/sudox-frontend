<template>
  <div class="pictures">
    <div class="box">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentDesktopPicture"
           :style="{opacity: style.desktop.opacity, transform: style.desktop.transform}"
           alt=""
           id="desktop">

      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentDialogsPicture"
           :style="{opacity: style.dialogs.opacity, bottom: style.dialogs.bottom}"
           alt=""
           id="dialogs">

      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentChatPicture"
           :style="{opacity: style.chat.opacity, bottom: style.chat.bottom}"
           alt=""
           id="chat">
    </div>
  </div>
</template>

<script>
  import gsap from "gsap";
  import timeout from "../../../utils/timeout";

  const START_TIMEOUT = 400;

  export default {
    name: "Pictures",
    props: {
      strings: {
        type: Object,
        required: true
      },

      cache: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        style: {
          desktop: {
            opacity: '1',
            transform: 'scale(1)'
          },

          dialogs: {
            opacity: '1',
            bottom: '-15%'
          },

          chat: {
            opacity: '1',
            bottom: '-5%'
          }
        }
      }
    },

    created() {
      if (!this.cache.pictures) {
        this.cache.pictures = {};
      }
    },

    mounted() {
      this.startComponent();
    },

    methods: {
      startComponent() {
        if (!this.cache.pictures.animated) {
          this.startAnimation();
          this.cache.pictures.animated = true;
        }
      },

      async startAnimation() {
        this.setupAnimationStyles();

        await Promise.all([
          timeout(START_TIMEOUT),
          this.waitLoad()
        ]);

        await this.startDesktopAnimation();

        await Promise.all([
          this.startDialogsAnimation(),
          this.startChatsAnimation()
        ]);
      },

      setupAnimationStyles() {
        let {desktop, dialogs, chat} = this.style;

        desktop.opacity = '0'
        desktop.transform = 'scale(0.7)'

        dialogs.opacity = '0'
        dialogs.bottom = '-30%'

        chat.opacity = '0'
        chat.bottom = '10%'
      },

      async waitLoad() {
        return new Promise(resolve => {
          window.onload = resolve;
        });
      },

      startDesktopAnimation() {
        let desktop = this.style.desktop;

        return Promise.all([
          gsap.to(desktop, {duration: 0.3, opacity: 1}),
          gsap.to(desktop, {duration: 0.2, ease: 'back.out', transform: 'scale(1)'})
        ]);
      },

      startDialogsAnimation() {
        let dialogs = this.style.dialogs;

        return Promise.all([
          gsap.to(dialogs, {duration: 0.2, opacity: 1}),
          gsap.to(dialogs, {duration: 0.3, ease: 'power4.out', bottom: '-15%'})
        ]);
      },

      startChatsAnimation() {
        let chat = this.style.chat;

        return Promise.all([
          gsap.to(chat, {duration: 0.2, opacity: 1}),
          gsap.to(chat, {duration: 0.3, ease: 'power4.out', bottom: '-5%'})
        ]);
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
    height: 650px;
  }

  #dialogs {
    position: absolute;
    left: 10%;
    z-index: 1;
    height: 600px;
  }

  #chat {
    position: absolute;
    left: 30%;
    z-index: 2;
    height: 600px;
  }
</style>