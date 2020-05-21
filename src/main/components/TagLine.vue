<template>
  <div class="tag-line">
    <div class="main-text">{{lang['tag_line_first_line']}}</div>
    <div class="second-line">
      <div class="main-text">{{lang['tag_line_second_line']}}</div>
      <PrintingString class="main-text" v-bind:words="lang['tag_line_words']"/>
    </div>
    <div class="hint">{{lang['tag_line_hint']}}</div>
    <div class="button">{{lang['tag_line_button']}}</div>
  </div>
</template>

<script>
  import PrintingString from "./PrintingString";

  export default {
    name: "TagLine",
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
  .tag-line {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .main-text {
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
    cursor: pointer;

    color: white;
    font-size: 20px;
    font-weight: 600;
  }

  @media screen and (max-width: 1260px) {
    .tag-line {
      align-items: center;
    }

    .main-text {
      text-align: center;
    }

    .second-line {
      flex-direction: column;
      align-items: center;

      white-space: normal;
    }

    .hint {
      text-align: center;
    }
  }
</style>