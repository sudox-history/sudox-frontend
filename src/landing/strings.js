import DesktopPictureEn from "./assets/img/desktop_en.png";
import DesktopPictureRu from "./assets/img/desktop_ru.png";
import DialogsPictureEn from "./assets/img/dialogs_en.png";
import DialogsPictureRu from "./assets/img/dialogs_ru.png";
import ChatPictureEn from "./assets/img/chat_en.png";
import ChatPictureRu from "./assets/img/chat_ru.png";

export default {
  en: {
    welcome: {
      headerContacts: 'Contacts',
      headerBeta: 'Beta',
      headerLanguage: 'RUS',
      headerLanguageShort: 'ru',

      contentTagFirstLine: 'Social media',
      contentTagSecondLine: 'created for ',
      contentTagWords: ['talk', 'work', 'fun', 'business', 'everyone'],
      contentHint: 'Everything you want you can do\nin one app - in Sudox',
      contentButton: 'Join beta',
      contentDesktopPicture: DesktopPictureEn,
      contentDialogsPicture: DialogsPictureEn,
      contentChatPicture: ChatPictureEn
    },
    features: {
      headerTag: 'Just another social network?',
      headerHint: 'Probably, it\'s your your first thoughts\nbut look at our things'
    }
  },
  ru: {
    welcome: {
      headerContacts: 'Контакты',
      headerBeta: 'Бета',
      headerLanguage: 'ENG',
      headerLanguageShort: 'en',

      contentTagFirstLine: 'Социальная сеть,',
      contentTagSecondLine: 'созданная для ',
      contentTagWords: ['общения', 'работы', 'веселья', 'бизнеса', 'каждого'],
      contentHint: 'Всё, что вы хотите, можно сделать\nв одном приложении - в Sudox',
      contentButton: 'Бета-версия',

      contentDesktopPicture: DesktopPictureRu,
      contentDialogsPicture: DialogsPictureRu,
      contentChatPicture: ChatPictureRu
    }
  }
}