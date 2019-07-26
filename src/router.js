import Vue from 'vue'
import Router from 'vue-router'
import student from './components/student.vue'
import pagetoupdateUser from './components/pagetoupdateUser.vue'
import pagetoselectAllStudent from './components/pagetoselectAllStudent.vue'
import pagetoselectUser from './components/pagetoselectUser.vue'
import pagetoselectAllUsers from './components/pagetoselectAllUsers.vue'
import pagetoselectmyCourse from './components/pagetoselectmyCourse.vue'
import pagetoselectAllCourse from './components/pagetoselectAllCourse.vue'
import pagetologin from './components/pagetologin.vue'
import pagetoexit from './components/pagetoexit.vue'
import pagetoregister from './components/pagetoregister.vue'
import pagetohandleStudent from './components/pagetohandleStudent.vue'
import top from './components/top.vue'



Vue.use(Router)

export default new Router({

 
  routes: [
	   {
      path: '/top/:username',
      name: 'top',
      component: top,
	props: true
    },
	  {
      path: '/pagetohandleStudent',
      name: 'pagetohandleStudent',
      component: pagetohandleStudent
    },
	   {
      path: '/pagetoregister',
      name: 'pagetoregister',
      component: pagetoregister
    },
	   {
      path: '/pagetoexit',
      name: 'pagetoexit',
      component: pagetoexit
    },

	  {
      path: '/pagetologin',
      name: 'pagetologin',
      component: pagetologin
    },
	  {
      path: '/pagetoselectAllCourse',
      name: 'pagetoselectAllCourse',
      component: pagetoselectAllCourse
    },
	  {
      path: '/pagetoselectmyCourse',
      name: 'pagetoselectmyCourse',
      component: pagetoselectmyCourse
    },
	  {
      path: '/pagetoselectAllUsers',
      name: 'pagetoselectAllUsers',
      component: pagetoselectAllUsers
    },
    {
      path: '/pagetoselectUser',
      name: 'pagetoselectUser',
      component: pagetoselectUser
    },
    {
      path: '/student',
      name: 'student',
      component: student,
		  props: true
    },  
	  {
      path: '/pagetoselectAllStudent',
      name: 'pagetoselectAllStudent',
      component: pagetoselectAllStudent
    },
		
		{
			path: '/pagetoupdateUser',
			name: 'pagetoupdateUser',
			component: pagetoupdateUser
		}
  ],

})
