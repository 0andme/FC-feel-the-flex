import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import ProductDetail from '~/components/ProductDetail'
import CreateProduct from './CreateProduct'
import MyPage from '~/routes/MyPage'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/productDetail/:id',
      component: ProductDetail
    },
    {
      path: '/createProduct',
      component: CreateProduct
    },
    {
      path: '/mypage',
      component: MyPage
    }
  ]
})
