<template>
  <div class="about">
    <h1>This is an REGIST page</h1>
    <button v-on:click='postData'>登録</button>
    <p>result:{{result}}</p>
  </div>
</template>

<script>
// API機能読み込み
import { API } from 'aws-amplify'
  
  
export default {
  data(){
    return{
      apiName: 'notesapi',
      path: '/items',
      result: ''
    }      
  },
  methods: {    
    postData: function () {
      // オプション
      const myInit = {
        headers: {},
        response: true,
        body: {
          id: 10, //Number(10),
          name: String("miyamura")
        }
      };
      // データ登録
      API.post(this.apiName, this.path, myInit).then(response => {
        console.log(response);
        this.result = response;
      }).catch(error => {
        console.log(error)
        this.result = error;
      });
    }
  }    
}
</script>