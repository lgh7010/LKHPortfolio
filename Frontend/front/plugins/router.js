let coverLangs = [
  'en',
  'ko',
]
const validationLang = (lang) => {
  if(process.client){
    if(!lang){
      return ''
    }

    let existLang = coverLangs.find((value) => {
      return value === lang
    })
    if(!existLang){
      return ''
    }
    return existLang
  }
  return ''
}

export default function({app, store, route, i18n}){
  let path = route.path
  let pathLang = process.client ? validationLang(path.split('/')[1]) || '' : ''
  let cookieLang = process.client ? validationLang(app.$cookies.get('lang')) : ''
  let browserLang = process.client ? validationLang(navigator.language.toLowerCase()) || 'en' : ''
  let lang = pathLang || cookieLang || browserLang

  if(process.client){
    try {
      app.$cookies.set('lang', lang, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
      store.commit('lang', lang);
      i18n.locale = lang;
    } catch(e){
      console.log(e)
    }
  }

  if (!path || path === '/' || path === '/index.html') {
    if (process.client) {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/' + lang)
      })
      return;
    }
  }

  if (process.client) {
    if (!pathLang) {
      path = '/' + lang + path
      window.onNuxtReady(() => {
        window.$nuxt.$router.push(path)
      })
    }
  }
}
