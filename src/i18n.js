import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DateTime } from 'luxon'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        returnEmptyString: false,
    });
//для разныз языков разные форматы
i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
    return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
});
i18n.services.formatter.add('DATE_SHOT', (value, lng, _options) => {
    return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_SHORT)
})

// i18n.changeLanguage('en') //быстро проверить перевод

export default i18n;