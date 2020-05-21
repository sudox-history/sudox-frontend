<template>
  <div class="slogan">
    <div class="main">{{lang['slogan_first_line']}}</div>
    <div class="main second-line">
      <div>{{lang['slogan_second_line']}}</div>
      <PrintingString v-bind:words="lang['slogan_words']"/>
    </div>
    <div class="hint">{{lang['slogan_hint']}}</div>
    <div class="button">{{lang['slogan_button']}}</div>
  </div>
</template>

<script>
  import PrintingString from "./PrintingString";

  export default {
    name: "Slogan",
    props: {
      lang: {
        type: Object,
        required: true
      }
    },
    components: {
      PrintingString
    }
  }
</script>

<style scoped>
  .slogan {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .main {
    color: #232323;
    font-size: 55px;
    font-weight: 600;
  }

  .second-line {
    display: flex;
    white-space: pre;
  }

  .hint {
    margin-top: 20px;

    color: #808080;
    font-size: 25px;
    font-weight: 400;

    white-space: pre-line;
  }

  .button {
    height: 60px;
    margin-top: 40px;

    display: flex;
    align-items: center;
    padding: 0 80px 0 80px;
    border-radius: 5px;

    background: #00bfa5;
    color: white;
    font-size: 20px;
    font-weight: 600;

    cursor: pointer;
  }
</style>