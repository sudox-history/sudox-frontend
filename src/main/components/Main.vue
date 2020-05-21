<template>
  <div id="app">
    <Header :lang="langs[lang]"/>
    <div class="spacer"></div>
    <TagLine :lang="langs[lang]"/>
    <div class="spacer"></div>
    <Footer/>
    <Picture :lang="langs[lang]"/>
  </div>
</template>

<script>
  import Header from './Header';
  import TagLine from './TagLine';
  import Footer from './Footer';
  import Picture from "./Picture";

  import LangPictureChatEn from '../res/img/chat_en.png'
  import LangPictureChatRu from '../res/img/chat_ru.png'
  import LangPictureDialogsEn from '../res/img/dialogs_en.png'
  import LangPictureDialogsRu from '../res/img/dialogs_ru.png'
  import LangPictureDesktopEn from '../res/img/desktop_en.png'
  import LangPictureDesktopRu from '../res/img/desktop_ru.png'

  export default {
    name: 'App',

    data() {
      return {
        lang: '',
        langs: {
          en: {
            lang: 'en',

            header_contacts: 'Contacts',
            header_beta: 'Beta',
            header_lang: 'RUS',

            tag_line_first_line: 'Social media',
            tag_line_second_line: 'that build for ',
            tag_line_words: ['talk', 'work', 'fun', 'business', 'all'],
            tag_line_hint: 'Everything you want you can do\nin one app - in Sudox',
            tag_line_button: 'Join beta',

            picture_chat: LangPictureChatEn,
            picture_dialogs: LangPictureDialogsEn,
            picture_desktop: LangPictureDesktopEn
          },
          ru: {
            header_contacts: 'Контакты',
            header_beta: 'Бета',
            header_lang: 'ENG',

            tag_line_first_line: 'Социальная сеть,',
            tag_line_second_line: 'созданная для ',
            tag_line_words: ['общения', 'работы', 'веселья', 'бизнеса', 'всего'],
            tag_line_hint: 'Всё, что вы хотите, можно сделать\nв одном приложении - в Sudox',
            tag_line_button: 'Бета-версия',

            picture_chat: LangPictureChatRu,
            picture_dialogs: LangPictureDialogsRu,
            picture_desktop: LangPictureDesktopRu
          }
        }
      }
    },

    components: {
      Picture,
      Header,
      TagLine,
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
    overflow: hidden;
  }

  .spacer {
    flex: 2;
  }
</style>

<style scoped>
  #app {
    position: absolute;
    width: 90%;
    height: 100%;
    margin: 0 5% 0 5%;

    display: flex;
    flex-direction: column;

    font-family: 'Montserrat', sans-serif;
  }
</style>