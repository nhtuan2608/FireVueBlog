import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isDevMode: false,		// if false, user can't inspect element (F12)
		isMaintenance: false,   // if true, move to maintenance page
		sampleArticleCards: [
			{ articleTitle: "Article #1", articleCoverPhoto: "stock-1", createdDate: "May 1, 2021"},
			{ articleTitle: "Article #2", articleCoverPhoto: "stock-2", createdDate: "May 7, 2021" },
			{ articleTitle: "Article #3", articleCoverPhoto: "stock-3", createdDate: "May 14, 2021" },
			{ articleTitle: "Article #4", articleCoverPhoto: "stock-4", createdDate: "May 21, 2021" },
		],
		isEditingMode: null,
		languagesPackage: {
			isOff: false,						// Display none on Nav if false
			chosenLanguage: "en",				// Change language, display on dropdown list
			languages: ['en', 'vn', 'jp'],		// Array of languages
		},
	},
	mutations: {
		toggleEditingMode(state, payload) {
			state.isEditingMode = payload;					 // Change edit mode Articles view
		},
		changeLanguage(state, chosen) {
			state.languagesPackage.chosenLanguage = chosen	// Change language
		},
	},
	actions: {
	},
	modules: {
	}
})
