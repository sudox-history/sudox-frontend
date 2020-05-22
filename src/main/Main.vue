<template>
  <div id="app">
    <Header :lang="langs[lang]"/>
    <div class="spacer"></div>
    <Content :lang="langs[lang]"/>
    <div class="spacer"></div>
    <Footer/>
    <Pictures :lang="langs[lang]"/>
  </div>
</template>

<script>
  import Header from './components/main/Header';
  import Footer from './components/main/Footer';
  import Content from './components/main/Content';
  import Pictures from "./components/main/Pictures";

  import DesktopPictureEn from './res/img/desktop_en.png'
  import DesktopPictureRu from './res/img/desktop_ru.png'
  import DialogsPictureEn from './res/img/dialogs_en.png'
  import DialogsPictureRu from './res/img/dialogs_ru.png'
  import ChatPictureEn from './res/img/chat_en.png'
  import ChatPictureRu from './res/img/chat_ru.png'

  export default {
    name: 'App',

    data() {
      return {
        lang: '',
        langs: {
          en: {
            lang: 'en',
            main: {
              header_contacts: 'Contacts',
              header_beta: 'Beta',
              header_lang: 'RUS',

              content_slogan_first: 'Social media',
              content_slogan_second: 'that build for ',
              content_slogan_words: ['talk', 'work', 'fun', 'business', 'everyone'],
              content_hint: 'Everything you want you can do\nin one app - in Sudox',
              content_button: 'Join beta',

              pictures_desktop: DesktopPictureEn,
              pictures_dialogs: DialogsPictureEn,
              pictures_chat: ChatPictureEn
            }
          },
          ru: {
            lang: 'ru',
            main: {
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
    width: 90%;
    height: 100%;
    margin: 0 5% 0 5%;

    display: flex;
    flex-direction: column;

    font-family: 'Montserrat', sans-serif;
  }

  .spacer {
    flex: 2;
  }

  .hide {
    opacity: 0;
  }
</style>
