<template>
  <div class="container">
    <FightPersos />
<br>
      <CreatePerso />
      <br>
    <h3>Character list</h3>
 
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Traits</th>
          <th>Health</th>
          <th>Attack</th>
       
      
         
        </tr>
      </thead>
           

      <tbody>

         
        <tr v-for="(perso, index) in persos" v-if="index <= 18" :key="perso.code">
        
          
          <td>{{ perso.name }}</td>
          <td>{{ perso.traits }}</td>
          <td class="health">{{ perso.health }}</td>
          <td class="attack">{{ perso.attack }}</td>
         

        </tr>
      </tbody>
    </table>
       <!-- je souhaite afficher le personnage créé -->
        <PersoItem  v-for="per in perso" :key="per.id" :perso="perso"  ></PersoItem> 
     

  </div>
</template>

<script>
import Vue from 'vue'
import CreatePerso from '@/components/CreatePerso/CreatePerso.vue';
import PersoItem from '@/components/PersoItem/PersoItem.vue';
import FightPersos from '@/components/FightPersos/FightPersos.vue'
import perso from '@/models/perso.ts'
import { mapState, mapGetters } from 'vuex';


export default {
  name: 'ListPersos',
  components:{
      CreatePerso,
      PersoItem,
      FightPersos
  },
  mounted () {
    this.$store.dispatch('loadPersos')
  },

 computed: {
      ...mapState(['persos']),
      ...mapGetters('persos', ['done']),
  },
  
}

</script>
<style lang="css" scoped>
.health {
 color:green;
}
.attack{
  color:red;
}

</style>