const path = require("path")
module.exports ={
    i18n: {
        locales: ['tr', 'en'],
        defaultLocale: 'tr',
        localeDetection: false,
        localePath: path.resolve("./public/locales/"),
    }
} 

