<template>
  <div class="top-bar">
    <div class="item">{{lang['top_bar_contacts']}}</div>
    <div class="item">{{lang['top_bar_beta']}}</div>
    <div class="item spacer"></div>
    <div @click="changeLang" class="item">{{lang['top_bar_lang']}}</div>
  </div>
</template>

<script>
  export default {
    name: "TopBar",
    props: {
      lang: {
        type: Object,
        required: true
      }
    },

    methods: {
      changeLang() {
        localStorage.setItem('lang', this.lang['lang'] === 'en' ? 'ru' : 'en');
        location.reload()
      }
    }
  }
</script>

<style scoped>
  .top-bar {
    display: flex;
    align-items: center;
    padding: 60px 0 60px 0;
  }

  .item {
    margin-right: 50px;

    color: #424242;
    font-size: 20px;
    font-weight: 500;

    cursor: pointer;
  }

</style>