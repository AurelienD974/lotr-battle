<template>
  <div class="container-fluid">
  <div class="container">
    <h3>Arena</h3>
    <br>
  <div class="row">
  
      <form @submit.prevent="fight()" action="" >
      <div class="form-group col-md-3">
          <label for="fighter1">Fighter 1 </label>
          <select class="form-control" name="" id="fighter1">
                <option disabled value="">Champion</option>
              <option v-for="(perso, index) in persos" :key="perso.id" :perso="perso" v-if="index <= 18">{{perso.name}}</option>
          </select>
      </div>
        <div class="form-group col-md-3">
          <label for="fighter2">Fighter 2 </label>

          <select class="form-control" name="" id="fighter2">
                <option disabled value="">Champion</option>
              <option v-for="(perso, index) in persos" :key="perso.id" :perso="perso" v-if="index <= 18">{{perso.name}}</option>
              
          </select>
          <!-- <h3>{{ position }}</h3>
  <h3>{{ position }}</h3> -->

      </div>
      <button class="btn btn-dark" type="submit">Fight</button>
      <h1 id="winner"></h1>
</form>
     
  </div>
  
  </div>
<br>
  </div>

</template>
<script lang="ts">
import Vue from 'vue';
import Perso from '@/models/perso';
import Persos from '@/store/modules/persos.ts'
import '@/store/index.ts'
import axios from 'axios'
// import func from '../../../vue-temp/vue-editor-bridge';

export default Vue.extend({
data(){
        return{
            persos: [],
         
        }
      
 
    },

    mounted(){
        this.getPerso()
    },
    methods:{


getPerso: function(){

  axios.get(`https://ringsdb.com/api/public/cards/`)
  .then((result) => {
      console.log(result)

      this.persos = result.data
      
  
  })
  .catch((error => {
      console.log(error)
  }))
},
fight(): void{

let winner = document.createElement('H1')
winner.innerHTML = "winner : "

  
}
},

});
</script>
