import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import GetInvolved from "./pages/GetInvolved.vue";
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import TalkAndWalk from "./pages/TalkAndWalk.vue";
import StateOfEducationAndMentalHealth from "./pages/StateOfEducationAndMentalHealth.vue"
import TheDifferenceBetweenStressAndStressors from "./pages/TheDifferenceBetweenStressAndStressors.vue"
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Help from './pages/Help.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import PageNotFound from './pages/PageNotFound.vue'
import Education from './pages/Education.vue'
import NonProfits from './pages/NonProfits.vue'
import Enterprise from './pages/Enterprise.vue'
import Terms from './pages/Terms.vue'
import Privacy from './pages/Privacy.vue';
import RequestDemo from './pages/RequestDemo.vue'
import Verification from './pages/Verification.vue'
import Apply from './pages/Apply.vue'
import CreatorApp from "./pages/CreatorApp.vue"
import ProfessionalApp from './pages/ProfessionalApp.vue'
import PrivateApp from './pages/PrivateApp.vue'
import CaseStudies from './pages/CaseStudies.vue'
import WhyTadHealth from "./pages/WhyTadHealth.vue"

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      document.querySelector("html").style.scrollBehavior = "";
    }
  },
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/apply",
      component: Apply,
    },
    {
      path: "/creator-application",
      component: CreatorApp,
    },
    {
      path: "/professional-application",
      component: ProfessionalApp,
    },
    {
      path: "/private-application",
      component: PrivateApp,
    },
    {
      path: "/get-involved",
      component: GetInvolved,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/blog-post",
      component: BlogPost,
    },
    {
      path: "/talk-and-walk",
      component: TalkAndWalk,
    },
    {
      path: "/state-of-education-and-mental-health",
      component: StateOfEducationAndMentalHealth,
    },
    {
      path: "/the-difference-between-stress-and-stressors",
      component: TheDifferenceBetweenStressAndStressors,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/education",
      component: Education,
    },
    {
      path: "/enterprise",
      component: Enterprise,
    },
    {
      path: "/help",
      component: Help,
    },
    {
      path: "/organizations",
      component: NonProfits,
    },
    {
      path: "/signin",
      component: SignIn,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/terms",
      component: Terms,
    },
    {
      path: "/privacy",
      component: Privacy,
    },
    {
      path: "/reset-password",
      component: ResetPassword,
    },
    {
      path: "/request-demo",
      component: RequestDemo,
    },
    {
      path: "/verification",
      component: Verification,
    },
    {
      path: "/casestudies",
      component: CaseStudies,
    },
    {
      path: "/whytadhealth",
      component: WhyTadHealth
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
    
  ],
});

export default router