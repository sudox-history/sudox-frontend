<template>
  <div id="app">
    <TopBar v-bind:lang="langs[lang]"/>
    <div class="spacer"></div>
    <Slogan v-bind:lang="langs[lang]"/>
    <div class="spacer"></div>
    <BottomBar/>
  </div>
</template>

<script>
  import TopBar from './components/TopBar';
  import Slogan from './components/Slogan';
  import BottomBar from './components/BottomBar';

  export default {
    name: 'App',

    data() {
      return {
        lang: '',
        langs: {
          en: {
            lang: 'en',

            top_bar_contacts: 'Contacts',
            top_bar_beta: 'Beta',
            top_bar_lang: 'RUS',

            slogan_first_line: 'Social media',
            slogan_second_line: 'that build for ',
            slogan_words: ['talk', 'work','fun', 'business', 'everything'],
            slogan_hint: 'Everything you want you can do in one app - in Sudox',
            slogan_button: 'Join beta'
          },
          ru: {
            top_bar_contacts: "Контакты",
            top_bar_beta: "Бета",
            top_bar_lang: 'ENG',

            slogan_first_line: "Социальная сеть,",
            slogan_second_line: "созданная для ",
            slogan_words: ["общения", "работы","развлечений", "бизнеса", "всего"],
            slogan_hint: "Всё, что вы хотите, можно сделать в одном приложении - в Sudox",
            slogan_button: "Бета-версия"
          }
        }
      }
    },

    components: {
      TopBar,
      Slogan,
      BottomBar
    },

    created() {
      const DEFAULT_LANG = 'en';

      let lang = localStorage.getItem('lang');
      this.lang = lang ? lang : DEFAULT_LANG;
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    position: absolute;
    width: calc(100% - 200px);
    height: 100%;
    margin: 0 100px 0 100px;

    display: flex;
    flex-direction: column;

    font-family: 'Montserrat', sans-serif;
  }

  .spacer {
    flex: 2;
  }
</style>
