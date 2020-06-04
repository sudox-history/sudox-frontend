<template>
  <div class="info">
    <div class="tag">
      <div>{{strings.contentTagFirstLine}}</div>
      <div>{{strings.contentTagSecondLine}}</div>
      <Words :strings="strings"/>
    </div>

    <div class="hint">{{strings.contentHint}}</div>
    <div class="button">{{strings.contentButton}}</div>
  </div>
</template>

<script>
  import Words from './Words';

  export default {
    name: 'Info',
    props: {
      strings: {
        type: Object,
        required: true
      }
    },
    components: {
      Words
    },
  }
</script>

<style scoped>
  .info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    white-space: pre;
    color: #232323;
    font-size: 55px;
    font-weight: 600;
  }

  .tag {
    display: flex;
    flex-wrap: wrap;
    white-space: pre;
    color: #232323;
    font-size: 55px;
    font-weight: 600;
  }

  .tag > div:first-child {
    flex-basis: 100%;
  }

  .hint {
    margin-top: 20px;
    white-space: pre;
    color: #808080;
    font-size: 25px;
    font-weight: 400;
  }

  .button {
    display: flex;
    align-items: center;
    margin-top: 40px;
    border-radius: 5px;
    background: #00bfa5;
    cursor: pointer;
    padding: 18px 80px 18px 80px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    user-select: none;
  }
</style>