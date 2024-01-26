<template>
  <nav-bar> </nav-bar>
  <hero-section
    heading="Build The Community Your Fans Will Love"
    para="Huddle re-imagines the way we build communities. You have a voice, but so does your
        audience. Create connections with your users as you engage in genuine discussion."
  >
  </hero-section>
  <the-header> </the-header>
  <feed-back :list="feedback"> </feed-back>
  <grow-together> </grow-together>
  <flowing-conversations> </flowing-conversations>
  <your-users></your-users>
  <callto-action> </callto-action>
  <the-footer> </the-footer>
</template>

<script>
import NavBar from './components/layouts/NavBar.vue'
import HeroSection from './components/layouts/HeroSection.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import FeedBack from './components/Content/FeedBack.vue'
import GrowTogether from './components/Content/GrowTogether.vue'
import FlowingConversations from './components/Content/FlowingConversations.vue'
import YourUsers from './components/Content/YourUsers.vue'
import CalltoAction from './components/Content/CalltoAction.vue'
import TheFooter from './components/Content/TheFooter.vue'

export default {
  components: {
    NavBar,
    HeroSection,
    TheHeader,
    FeedBack,
    GrowTogether,
    FlowingConversations,
    YourUsers,
    CalltoAction,
    TheFooter
  },
  data() {
    return {
      feedback: [
        {
          id: 0,
          title: '1.4k',
          desc: 'Communities Formed',
          icon: 'communities'
        },
        {
          id: 1,
          title: '2.7m',
          desc: 'Messages Sent',
          icon: 'messages'
        }
      ]
    }
  }
}
</script>
