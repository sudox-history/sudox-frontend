<template>
  <div class="content">
    <div class="slogan">
      <div>{{lang['main']['content_slogan_first']}}</div>
      <div>{{lang['main']['content_slogan_second']}}</div>
      <PrintingString class="slogan-words" v-bind:words="lang['main']['content_slogan_words']"/>
    </div>
    <div class="hint">{{lang['main']['content_hint']}}</div>
    <div class="button">{{lang['main']['content_button']}}</div>
  </div>
</template>

<script>
  import PrintingString from "../common/PrintingString";

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
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .slogan {
    display: flex;
    flex-wrap: wrap;

    color: #232323;
    font-size: 55px;
    font-weight: 600;

    white-space: pre;
  }

  .slogan>div:first-child {
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

  @media screen and (max-width: 1300px) {
    .content {
      align-items: center;
      text-align: center;
    }

    .slogan {
      justify-content: center;
    }
  }

  @media screen and (max-width: 800px) {
    .slogan {
      white-space: normal;
    }

    .slogan-words {
      flex-basis: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    .slogan {
      font-size: 35px;
    }

    .hint {
      font-size: 18px;
    }

    .button {
      padding: 0 60px 0 60px;
      font-size: 18px;
    }
  }

</style>