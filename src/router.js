import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdminHome from './Pages/Admin/Home.vue'
import AdminLogin from './Pages/Admin/Login.vue'
import AdminAbout from './Pages/Admin/About.vue'
import AdminRegistration from './Pages/Admin/Registration.vue'
import AdminContact from './Pages/Admin/Contact.vue'
import WorkerHome from './Pages/Worker/Home.vue'
import WorkerLogin from './Pages/Worker/Login.vue'
import WorkerAbout from './Pages/Worker/About.vue'
import WorkerRegistration from './Pages/Worker/Registration.vue'
import WorkerContact from './Pages/Worker/Contact.vue'
import Worker from './Pages/Worker/Worker.vue'
import Admin from './Pages/Admin/Admin.vue'
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/AdminLogin',
            name: 'AdminLogin',
            component: AdminLogin,
            meta: { requiresAuth: false },
        },
        {
            path: '/AdminReg',
            name: 'AdminRegistration',
            component: AdminRegistration,
            meta: { requiresAuth: false },
        },

        {
            path: '/WorkerLogin',
            name: 'WorkerLogin',
            component: WorkerLogin
        },
        {
            path: '/WorkerReg',
            name: 'WorkerRegistration',
            component: WorkerRegistration
        },
        {
            path: '/Admin',
            name: 'Admin',
            component: Admin,
            children: [{
                    path: '/',
                    name: 'AdminHome',
                    component: AdminHome,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'About',
                    name: 'AdminAbout',
                    component: AdminAbout,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'Contact',
                    name: 'AdminContact',
                    component: AdminContact,
                    meta: { requiresAuth: true },
                },
            ]
        },
        {
            path: '/Worker',
            name: 'Worker',
            component: Worker,
            meta: { requiresAuth: true },
            children: [{
                    path: '/',
                    name: 'WorkerHome',
                    component: WorkerHome,
                },
                {
                    path: 'About',
                    name: 'WorkerAbout',
                    component: WorkerAbout,
                },
                {
                    path: 'Contact',
                    name: 'WorkerContact',
                    component: WorkerContact,
                },
            ]
        }
    ]

})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('Admin');
    if (to.meta.requiresAuth) {
        if (token && user) {
            next();
        } else {
            next({ name: 'AdminLogin' })
        }
    } else {

        if (!token || !user) {
            next();
        } else {
            next({ name: 'AdminHome' });
        }
    }
})
export default router;