<template>
  <div class="header">
    <div class="item">{{lang['header_contacts']}}</div>
    <div class="item item-margin">{{lang['header_beta']}}</div>
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
    padding: 5vh 0 5vh 0;
  }

  .item {
    color: #424242;
    font-size: 20px;
    font-weight: 500;

    cursor: pointer;
  }

  .item-margin {
    margin-left: 50px;
  }

  @media screen and (max-width: 500px) {
    .item {
      font-size: 18px;
    }
  }

</style>