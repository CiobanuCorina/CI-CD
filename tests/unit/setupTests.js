// import '@fortawesome/fontawesome-free/css/all.css';
// import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';
// import colors from "vuetify/lib/util/colors";
//
// Vue.use(Vuetify);
//
// export default new Vuetify({
//   icons: {
//     iconfont: 'fa',
//   },
//   theme: {
//     themes: {
//       light: {
//         navbar: colors.white,
//         app: colors.grey.lighten3,
//       },
//     },
//   },
// });

jest.mock("axios", () => ({
  default: {
    create: jest.fn()
  },

}))


