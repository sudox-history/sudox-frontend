<template>
  <div class="content">
    <Info :strings="strings" class="item"/>
    <div class="item">
      <Pictures :cache="cache" :strings="strings"/>
    </div>
  </div>
</template>

<script>
  import Info from "./Info";
  import Pictures from "./Pictures";

  export default {
    name: "Slogan",
    props: {
      strings: {
        type: Object,
        required: true
      },
      cache: {
        type: Object,
        required: true
      }
    },
    components: {
      Info,
      Pictures
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
  }
</style>