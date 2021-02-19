<!--template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template-->

<template>
  <div id="app">
    <!--div v-if="authState !== 'signedin'">You are signed out.</div-->
    <amplify-authenticator>
      <amplify-sign-in header-text="Bitset Sytem 認証" slot="sign-in"></amplify-sign-in>
      <amplify-sign-up header-text="ユーザー登録" slot="sign-up"></amplify-sign-up>      
  
      <div v-if="authState === 'signedin' && user">
      <!--div v-if="signedIn" -->
        <!--div>Hello, {{user.username}}</div-->
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>


<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'app',
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
      unsubscribeAuth: undefined
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
