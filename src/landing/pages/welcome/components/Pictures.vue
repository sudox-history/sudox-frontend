<template>
  <div class="pictures">
    <div class="box">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentDesktopPicture" alt="" id="desktop" ref="desktop">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentDialogsPicture" alt="" id="dialogs" ref="dialogs">
      <!--suppress HtmlUnknownTarget -->
      <img :src="strings.contentChatPicture" alt="" id="chat" ref="chat">
    </div>
  </div>
</template>

<script>
  import gsap from "gsap";
  import timeout from "../../../utils/timeout";

  const START_TIMEOUT = 300;

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

    created() {
      console.log("Pictures component created");

      if (!this.cache.initialized) {
        this.cache.initialized = true;
        this.cache.alreadyUsed = false;
      }
    },

    mounted() {
      console.log("Pictures component mounted");
      this.startComponent();
    },

    methods: {
      startComponent() {
        console.log("Pictures cache:", this.cache);
        if (!this.cache.alreadyUsed) {
          this.cache.alreadyUsed = true;
          this.startFirstTimeAnimation();
        } else {
          this.showPictures();
        }
      },

      async startFirstTimeAnimation() {
        await Promise.all([
          timeout(START_TIMEOUT),
          this.waitPicturesLoad()
        ]);

        await this.startDesktopPictureAnimation();

        await Promise.all([
          this.startDialogsPictureAnimation(),
          this.startChatsPictureAnimation()
        ]);
      },

      async waitPicturesLoad() {
        return new Promise(resolve => {
          window.onload = resolve;
        });
      },

      startDesktopPictureAnimation() {
        return Promise.all([
          gsap.to(this.$refs.desktop,
            {duration: 0.3, opacity: 1}),

          gsap.to(this.$refs.desktop,
            {duration: 0.2, ease: 'back.out', scale: 1})
        ]);
      },

      startDialogsPictureAnimation() {
        return Promise.all([
          gsap.to(this.$refs.dialogs,
            {duration: 0.2, opacity: 1}),

          gsap.to(this.$refs.dialogs,
            {duration: 0.3, ease: 'power4.out', bottom: '-15%'})
        ]);
      },

      startChatsPictureAnimation() {
        return Promise.all([
          gsap.to(this.$refs.chat,
            {duration: 0.2, opacity: 1}),

          gsap.to(this.$refs.chat,
            {duration: 0.3, ease: 'power4.out', bottom: '-5%'})
        ]);
      },

      showPictures() {
        let refs = Object.values(this.$refs);
        console.log(refs);

        for (let i = 0; i < refs.length; i++) {
          // noinspection JSUnresolvedVariable
          console.log(refs[i]);
          refs[i].style.opacity = "1";
        }
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
    transform: scale(0.8);
    opacity: 0;
    z-index: 0;
    height: 650px;
  }

  #dialogs {
    position: absolute;
    bottom: -30%; /* -15% */
    left: 10%;
    opacity: 0;
    z-index: 1;
    height: 600px;
  }

  #chat {
    position: absolute;
    bottom: 10%; /* -5% */
    left: 30%;
    opacity: 0;
    z-index: 2;
    height: 600px;
  }
</style>