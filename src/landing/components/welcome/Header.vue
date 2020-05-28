<template>
  <div class="header">
    <div class="item">{{strings.contacts}}</div>
    <div class="item margin">{{strings.beta}}</div>
    <div class="item spacer"></div>
    <div @click="changeLang" class="item">{{strings.language}}</div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      strings: {
        type: Object,
        required: true
      }
    },
    methods: {
      changeLang() {
        localStorage.setItem('language', this.strings.languageShort);
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
    cursor: pointer;
    color: #424242;
    font-size: 20px;

    font-weight: 500;
    user-select: none;
  }

  .margin {
    margin-left: 50px;
  }

  .spacer {
    flex: 2;
  }
</style>