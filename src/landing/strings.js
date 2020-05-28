import DesktopPictureEn from "./assets/img/desktop_en.png";
import DesktopPictureRu from "./assets/img/desktop_ru.png";
import DialogsPictureEn from "./assets/img/dialogs_en.png";
import DialogsPictureRu from "./assets/img/dialogs_ru.png";
import ChatPictureEn from "./assets/img/chat_en.png";
import ChatPictureRu from "./assets/img/chat_ru.png";

export default {
  en: {
    welcome: {
      contacts: 'Contacts',
      beta: 'Beta',
      language: 'RUS',
      languageShort: 'ru',

      tagFirstLine: 'Social media',
      tagSecondLine: 'created for ',
      hint: 'Everything you want you can do\nin one app - in Sudox',
      words: ['talk', 'work', 'fun', 'business', 'everyone'],
      button: 'Join beta',

      desktopPicture: DesktopPictureEn,
      dialogsPicture: DialogsPictureEn,
      chatPicture: ChatPictureEn
    }
  },
  ru: {
    welcome: {
      contacts: 'Контакты',
      beta: 'Бета',
      language: 'ENG',
      languageShort: 'en',

      tagFirstLine: 'Социальная сеть,',
      tagSecondLine: 'созданная для ',
      hint: 'Всё, что вы хотите, можно сделать\nв одном приложении - в Sudox',
      words: ['общения', 'работы', 'веселья', 'бизнеса', 'каждого'],
      button: 'Бета-версия',

      desktopPicture: DesktopPictureRu,
      dialogsPicture: DialogsPictureRu,
      chatPicture: ChatPictureRu
    }
  }
}