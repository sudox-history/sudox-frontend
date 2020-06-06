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
  import gsap from 'gsap';
  import {timeout} from '../../../utils';

  const ANIMATION_TIMEOUT = 400;

  export default {
    name: 'Pictures',
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
          this.cache.pictures.animated = true;
          this.startOpenAnimation();
        }
      },

      async startOpenAnimation() {
        this.setupOpenAnimationStyles();

        await Promise.all([
          timeout(ANIMATION_TIMEOUT),
          this.waitLoad()
        ]);

        await this.startDesktopOpenAnimation();

        await Promise.all([
          this.startDialogsOpenAnimation(),
          this.startChatsOpenAnimation()
        ]);
      },

      setupOpenAnimationStyles() {
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

      startDesktopOpenAnimation() {
        let desktop = this.style.desktop;
        return Promise.all([
          gsap.to(desktop, {duration: 0.3, opacity: 1}),
          gsap.to(desktop, {duration: 0.2, ease: 'back.out', transform: 'scale(1)'})
        ]);
      },

      startDialogsOpenAnimation() {
        let dialogs = this.style.dialogs;
        return Promise.all([
          gsap.to(dialogs, {duration: 0.2, opacity: 1}),
          gsap.to(dialogs, {duration: 0.3, ease: 'power4.out', bottom: '-15%'})
        ]);
      },

      startChatsOpenAnimation() {
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