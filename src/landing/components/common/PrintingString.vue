<template>
  <div class="printing-string">
    <div>&#8203;{{word}}</div>
    <div :class="{'cursor-hidden': cursorHidden}" class="cursor"></div>
  </div>
</template>

<script>
  const START_TIMEOUT = 1000;
  const WORD_SHOW_TIMEOUT = 2000;
  const WORD_EMPTY_TIMEOUT = 100;
  const LETTER_PRINT_TIMEOUT = 100;
  const LETTER_CLEAN_TIMEOUT = 60;
  const CURSOR_BLINK_INTERVAL = 400;

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
        cursorHidden: false,
        cursorInterval: 0
      }
    },

    created() {
      this.startCursorBlink();
      setTimeout(this.startAnimation, START_TIMEOUT, this.words);
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
          this.cursorHidden = !this.cursorHidden;
        }, CURSOR_BLINK_INTERVAL);
      },

      stopCursorBlink() {
        clearInterval(this.cursorInterval);
        this.cursorHidden = false;
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .cursor {
    align-self: stretch;
    margin-left: 2px;
    background: black;
    width: 2px;
  }

  .cursor-hidden {
    display: none;
  }
</style>