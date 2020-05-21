<template>
  <div class="header">
    <div class="item">{{lang['header_contacts']}}</div>
    <div class="item">{{lang['header_beta']}}</div>
    <div class="item spacer"></div>
    <div @click="changeLang" class="item">{{lang['header_lang']}}</div>
  </div>
</template>

<script>
  export default {
    name: "Header",
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
  .header {
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