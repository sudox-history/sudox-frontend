<template>
  <div class="printing-string">
    <div>&#8203;{{word}}</div>
    <div class="cursor" v-show="cursorSeen"></div>
  </div>
</template>

<script>
  const START_TIMEOUT        = 2000;
  const WORD_SHOW_TIMEOUT    = 2000;
  const WORD_EMPTY_TIMEOUT   = 700;
  const LETTER_PRINT_TIMEOUT = 100;
  const LETTER_CLEAN_TIMEOUT = 60;
  const CURSOR_INTERVAL      = 400;

  export default {
    name: 'PrintingString',
    props: {
      words: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        word: '',
        cursorSeen: true,
        cursorInterval: 0
      }
    },

    created() {
      this.startCursorBlink();
      setTimeout(this.startAnimation, START_TIMEOUT, this.words)
    },

    methods: {
      async startAnimation(words) {
        for (let i = 0; i < words.length; i++) {
          await this.printWord(words[i]);
          await this.timeout(WORD_SHOW_TIMEOUT);

          await this.cleanWord(words[i]);
          await this.timeout(WORD_EMPTY_TIMEOUT);

          if (i === words.length - 1) {
            i = -1;
          }
        }
      },

      async printWord(word) {
        this.stopCursorBlink();

        for (let i = 1; i <= word.length; i++) {
          this.word = word.slice(0, i);
          await this.timeout(LETTER_PRINT_TIMEOUT);
        }

        this.startCursorBlink();
      },

      async cleanWord(word) {
        for (let i = 0; i < word.length; i++) {
          this.word = this.word.slice(0, -1);
          await this.timeout(LETTER_CLEAN_TIMEOUT);
        }
      },

      startCursorBlink() {
        this.cursorInterval = setInterval(() => {
          this.cursorSeen = !this.cursorSeen;
        }, CURSOR_INTERVAL)
      },

      stopCursorBlink() {
        clearInterval(this.cursorInterval);
        this.cursorSeen = true;
      },

      async timeout(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }
    }
  }
</script>

<style scoped>
  /*noinspection CssUnknownTarget*/
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  .printing-string {
    display: flex;
    align-items: center;
    flex-direction: row;

    white-space: pre;
  }

  .cursor {
    width: 2px;

    align-self: stretch;
    margin-left: 2px;
    padding: 5% 0 5% 0;

    background: black;
  }
</style>