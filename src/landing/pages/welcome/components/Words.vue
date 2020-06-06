<template>
  <div class="words">
    <div>&#8203;{{word}}</div>
    <div :style="{opacity: style.cursor.opacity}" class="cursor"/>
  </div>
</template>

<script>
  import {timeout} from '../../../utils';

  const ANIMATION_TIMEOUT = 1000;
  const WORD_SHOW_TIMEOUT = 2000;
  const WORD_EMPTY_TIMEOUT = 100;
  const LETTER_PRINT_TIMEOUT = 100;
  const LETTER_CLEAN_TIMEOUT = 60;
  const CURSOR_BLINK_INTERVAL = 400;

  export default {
    name: 'Words',
    props: {
      strings: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        word: '',
        cursorInterval: 0,

        style: {
          cursor: {
            opacity: '1'
          }
        },
      }
    },

    mounted() {
      this.startComponent();
    },

    methods: {
      startComponent() {
        this.startAnimation();
      },

      async startAnimation() {
        let words = this.strings.contentTagWords;

        this.startCursorBlink();
        await timeout(ANIMATION_TIMEOUT);

        for (let i = 0; i < words.length; i++) {
          await this.printWord(words[i]);
          await timeout(WORD_SHOW_TIMEOUT);

          await this.cleanWord(words[i]);
          await timeout(WORD_EMPTY_TIMEOUT);

          if (i === words.length - 1) {
            i = -1;
          }
        }
      },

      startCursorBlink() {
        this.cursorInterval = setInterval(() => {
            let cursor = this.style.cursor;
            if (cursor.opacity === '0') {
              cursor.opacity = '1';
            } else {
              cursor.opacity = '0';
            }
          }, CURSOR_BLINK_INTERVAL);
      },

      stopCursorBlink() {
        clearInterval(this.cursorInterval);
        this.style.cursor.opacity = '1';
      },

      async printWord(word) {
        this.stopCursorBlink();

        for (let i = 1; i <= word.length; i++) {
          this.word = word.slice(0, i);
          await timeout(LETTER_PRINT_TIMEOUT);
        }

        this.startCursorBlink();
      },

      async cleanWord(word) {
        for (let i = 0; i < word.length; i++) {
          this.word = this.word.slice(0, -1);
          await timeout(LETTER_CLEAN_TIMEOUT);
        }
      }
    }
  }
</script>

<style scoped>
  /*noinspection CssUnknownTarget*/
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  .words {
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
</style>