import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';	// Vuex keep state on page refresh
// import Cookies from 'js-cookie';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDevMode: true,		// if false, user can't inspect element (F12)
        isMaintenance: false,   // if true, move to maintenance page
        isError: JSON.parse(localStorage.getItem('isError')) ? JSON.parse(localStorage.getItem('isError')) : false,			// if true, move to error page
        disabledNavigation: JSON.parse(localStorage.getItem('pageNotFound')) ? JSON.parse(localStorage.getItem('pageNotFound')) : false,
        // plugins: [createPersistedState({
        //     storage: window.sessionStorage,
        //     getState: (key) => Cookies.getJSON(key),
        //     setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        // })],

        // User Credential
        user: null,
        userProfile: {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            userName: null,
            initials: null,
        },
        // 
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
            state.languagesPackage.chosenLanguage = chosen;	// Change language
        },
        setIsErrorPage(state, payload) {
            state.isError = payload;
            localStorage.setItem("isError" ,JSON.stringify(state.isError)); // OR
        },
        setDisabledNavigation(state, payload) {
            state.disabledNavigation = payload;             // if true, disable navigation
            localStorage.setItem("pageNotFound" ,JSON.stringify(state.disabledNavigation)); // OR
        },
        updateUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        // Write async method call DB to get record
    },
    modules: {
    }
})
