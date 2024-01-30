// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "../pages/HomeView.vue"
import ContactUs from "../pages/ContactUs.vue"
import AboutUs from "../pages/AboutUs.vue"
import BusinessModel from "../pages/BusinessModel.vue"
import OperationsView from "../pages/OperationsView.vue"
import OurClients from "../pages/OurClients.vue"
import OurCustomers from "../pages/OurCustomers.vue"
import ProductsView from "../pages/ProductsView.vue"
import ImagesGallery from "../pages/ImagesGallery.vue"
import NewsView from "../pages/NewsView.vue"
import BrandsView from "../pages/BrandsView.vue"

const routes = [
    {
       path: "/",
       name: "home-view",
       component: HomeView
    },
    {
        path: "/contact-us",
        name: "contact-us",
        component: ContactUs
     },
     {
        path: "/about-us",
        name: "about-us",
        component: AboutUs
     },
     {
        path: "/business-model",
        name: "business-model",
        component: BusinessModel
     },
     {
        path: "/operations-view",
        name: "operations-view",
        component: OperationsView
     },
     {
        path: "/our-clients",
        name: "our-clients",
        component: OurClients
     },
     {
        path: "/our-customers",
        name: "our-customers",
        component: OurCustomers
     },
     {
      path: "/products-view",
      name: "products-view",
      component: ProductsView
   },
   {
      path: "/images-gallery",
      name: "images-gallery",
      component: ImagesGallery
   },
   {
      path: "/news-view",
      name: "news-view",
      component: NewsView
   },
   {
      path: "/brands-view",
      name: "brands-view",
      component: BrandsView
   },

]

const router = createRouter({
    history: createWebHistory('/'),
    mode: HashChangeEvent,
    routes,
 });
 
 
 export default router;