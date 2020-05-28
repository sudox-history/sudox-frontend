<template>
  <div id="app">
    <Header :lang="langs[lang].main"/>
    <Content :lang="langs[lang].main"/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/main/Header';
  import Footer from './components/main/Footer';
  import Content from './components/main/Content';
  import Pictures from "./components/main/Pictures";

  import DesktopPictureEn from './assets/img/desktop_en.png'
  import DesktopPictureRu from './assets/img/desktop_ru.png'
  import DialogsPictureEn from './assets/img/dialogs_en.png'
  import DialogsPictureRu from './assets/img/dialogs_ru.png'
  import ChatPictureEn from './assets/img/chat_en.png'
  import ChatPictureRu from './assets/img/chat_ru.png'

  export default {
    name: 'App',

    data() {
      return {
        lang: '',
        langs: {
          en: {
            main: {
              lang: 'en',
              header_contacts: 'Contacts',
              header_beta: 'Beta',
              header_lang: 'RUS',

              content_slogan_first: 'Social media',
              content_slogan_second: 'created for ',
              content_slogan_words: ['talk', 'work', 'fun', 'business', 'everyone'],
              content_hint: 'Everything you want you can do\nin one app - in Sudox',
              content_button: 'Join beta',

              pictures_desktop: DesktopPictureEn,
              pictures_dialogs: DialogsPictureEn,
              pictures_chat: ChatPictureEn
            }
          },
          ru: {
            main: {
              lang: 'ru',
              header_contacts: 'Контакты',
              header_beta: 'Бета',
              header_lang: 'ENG',

              content_slogan_first: 'Социальная сеть,',
              content_slogan_second: 'созданная для ',
              content_slogan_words: ['общения', 'работы', 'веселья', 'бизнеса', 'каждого'],
              content_hint: 'Всё, что вы хотите, можно сделать\nв одном приложении - в Sudox',
              content_button: 'Бета-версия',

              pictures_desktop: DesktopPictureRu,
              pictures_dialogs: DialogsPictureRu,
              pictures_chat: ChatPictureRu
            }
          }
        }
      }
    },

    components: {
      Header,
      Content,
      Pictures,
      Footer
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
    overflow-x: hidden;
  }

  #app {
    position: absolute;
    height: 100%;
    width: 90%;

    padding: 0 5% 0 5%;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    font-family: 'Montserrat', sans-serif;
  }

  .hide {
    opacity: 0;
  }
</style>
