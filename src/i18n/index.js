import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		'en': require('./en.json'),
		'de': require('./de.json'),
		'es': require('./es.json')
	}
});

export default i18n;