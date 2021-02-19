<template>
  <div id="app">
    <amplify-authenticator>
      <amplify-sign-in header-text="Bitset Sytem 認証" slot="sign-in"></amplify-sign-in>
      <amplify-sign-up header-text="ユーザー登録" slot="sign-up"></amplify-sign-up>      
  
      <div v-if="authState === 'signedin' && user">
        <!--div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div-->
        <sidebar-menu :menu="menu"/>
        <router-view/>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>


<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
//import SideMenu from '@/components/SideMenu'
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  name: 'app',
  components: {
    SidebarMenu
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,

      menu: [
       {
          header: true,
          title: 'Bitset Service',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: '最新一覧',
          icon: 'fa fa-car'
        },
        {
          href: '/',
          title: '検索',
          icon: 'fa fa-search-minus'
        },
        {
          href: '/',
          title: '通知用車番登録',
          icon: 'fa fa-check-square'
        },
        {
          href: '/',
          title: '設定',
          icon: 'fa fa-cog'
        }
    ]
       
    }
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  }

}  
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
