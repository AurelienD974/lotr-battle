<template>
<div>
  <h3>Create Champion</h3>
  <br>
  <form @submit.prevent="addPerso()" class="CreatePerso">
<ul>
          <!-- <PersoItem ></PersoItem> -->
          <!-- <td>{{ perso.code }}</td> -->
          <li>  <input
      placeholder="Name"
      v-model="newPersoName"
      class="perso__input"
    /></li>
          <li>  <input
      placeholder="Traits"
      v-model="newPersoTraits"
      class="perso__input"
    /></li>
          <li>
              <input
              type="number"
      placeholder="Health"
      v-model="newPersoHealth"
      class="perso__input health"
      min="1"
      max="5"
    /></li>
          <li>  <input
          type="number"
      placeholder="Attack"
      v-model="newPersoAttack"
      class="perso__input attack"
      min="1"
      max="5"
    /></li>
   

 
    </ul>
  
    <button type="submit" class="btn-dark">Create</button>
      
  </form>
  <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): { newPersoName: string, newPersoTraits: string,newPersoHealth: number, newPersoAttack: number } {
    return {
      newPersoName: '',
      newPersoTraits: '',
      newPersoHealth: 0,
      newPersoAttack: 0, 
      

    };
  },
  methods: {
    addPerso(): void {
      if (this.newPersoName.length) {
        this.$store.dispatch('persos/add', { name: this.newPersoName });

        this.newPersoName = '';
      

      }
        if (this.newPersoTraits.length) {
        this.$store.dispatch('persos/add', {traits: this.newPersoTraits });

      
        this.newPersoTraits = '';

    

      }
        if (this.newPersoHealth) {
        this.$store.dispatch('persos/add', {health: this.newPersoHealth });
      
        this.newPersoHealth = 0;

    

      }
           if (this.newPersoAttack) {
        this.$store.dispatch('persos/add', {attack: this.newPersoAttack });

      
        this.newPersoAttack = 0;

    

      }
          
     

    },
  },
});
</script>

<style lang="scss" scoped>
ul li{
list-style: none;
}
.CreatePerso {
  display: flex;
}

.perso__input {
  flex: 1;
  height: 40px;
}
.perso__input[type='number']{
  width: 100%;
}

.health {
 color:green;
}
.attack{
  color:red;
}

.btn-dark {
  // padding: 0 1rem;
  height: 20vh;
}
</style>