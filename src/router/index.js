import PageHome from '@/components/page/Home.vue'
import PageThreadShow from '@/components/page/ThreadShow.vue'
import PageNotFound from '@/components/page/NotFound.vue'
import Forum from '@/components/page/Forum.vue'
import Category from '@/components/page/Category.vue'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      //Check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      //if thread exists, continue
      if (threadExists)
        return next()
      //If thread does not exist, reroute to PageNotFound path
      else
        next(
          {
            name: 'PageNotFound',
            params: {pathMatch: to.path.substring(1).split('/')},
            query: to.query,
            hash: to.hash
          }
          )
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})