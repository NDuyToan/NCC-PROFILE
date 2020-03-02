import Vue from 'vue'
import Router from 'vue-router'
import Main from './../components/Main';
import AboutUs from './../components/AboutUs';
import OurStrategy from './../components/OurStrategy';
import Services from './../components/Services';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'MainComponent',
      component: Main
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/our-strategy',
      name: 'our-strategy',
      component: OurStrategy,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    }
  ]
})
