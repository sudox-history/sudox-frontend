<template>
  <div class="content">
    <div id="left" class="item">
      <div class="slogan">
        <div>{{lang['content_slogan_first']}}</div>
        <div>{{lang['content_slogan_second']}}</div>
        <PrintingString class="slogan-words" :words="lang['content_slogan_words']"/>
      </div>
      <div class="hint">{{lang['content_hint']}}</div>
      <div class="button">{{lang['content_button']}}</div>
    </div>
    <div id="right" class="item">
      <Pictures :lang="lang"/>
    </div>
  </div>
</template>

<script>
  import PrintingString from "../common/PrintingString";
  import Pictures from "./Pictures";

  export default {
    name: "Slogan",
    props: {
      lang: {
        type: Object,
        required: true
      }
    },
    components: {
      Pictures,
      PrintingString
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    align-items: center;
  }

  .item {
    min-width: 50%;
    display: flex;
  }

  #left {
    flex-direction: column;
    align-items: flex-start;
  }

  #right {
    align-items: center;
  }

  .slogan {
    display: flex;
    flex-wrap: wrap;

    color: #232323;
    font-size: 55px;
    font-weight: 600;
    white-space: pre;
  }

  .slogan > div:first-child {
    flex-basis: 100%;
  }

  .hint {
    margin-top: 20px;

    color: #808080;
    font-size: 25px;
    font-weight: 400;
    white-space: pre-line;
  }

  .button {
    margin-top: 40px;

    display: flex;
    align-items: center;
    padding: 18px 80px 18px 80px;
    border-radius: 5px;

    background: #00bfa5;

    color: white;
    font-size: 20px;
    font-weight: 600;

    cursor: pointer;
    user-select: none;
  }

</style>