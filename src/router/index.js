import Vue from 'vue'
import Router from 'vue-router'
import PhraseList from '@/components/PhraseList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PhraseList',
      component: PhraseList
    }
  ]
})
