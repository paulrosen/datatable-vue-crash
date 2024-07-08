import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from "vue-i18n";

import App from './App.vue'
import router from './router'

export const i18n = createI18n({
    legacy: false,
    locale: "en", // set locale
    messages: {
		en: {
			"test": 'Testing the string translation',
			'the course': 'the course',
			'events': 'events',
		}
	}, // set locale messages
});

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
