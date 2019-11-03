<template>
<div>
    
      <tr>
    <input type="checkbox" v-model="perso.done" />
<td>
    <form
      @submit.prevent="setName()"
      v-if="perso.editing"
      class="perso__edit"
    >
      <input v-model="newPersoName" ref="newNameInput" />
      <button>Edit</button>
    </form>

    <div v-else @click="enterEditMode()">
      {{ perso.name }}
    </div>
    </td>
    <td>
    <form
      @submit.prevent="setTraits()"
      v-if="perso.editing"
      class="perso__edit"
    >
      <input v-model="newPersoTraits" ref="newTraitsInput" />
      <button>Edit</button>
    </form>

    <div v-else @click="enterEditMode()">
      {{ perso.newPersoTraits }}
    </div>
    </td>
      <td>
    <form
      @submit.prevent="setHealth()"
      v-if="perso.editing"
    class="perso__edit"
    >
      <input v-model="newPersoHealth" ref="newHealthInput" />
      <button>Edit</button>
    </form>

    <div v-else @click="enterEditMode()">
      {{ perso.newPersoHealth }}
    </div>
    </td>
      <td>
    <form
      @submit.prevent="setAttack()"
      v-if="perso.editing"
 class="perso__edit"
    >
      <input v-model="newPersoAttack" ref="newAttackInput" />
      <button>Edit</button>
    </form>

    <div v-else @click="enterEditMode()">
      {{ perso.newPersoAttack }}
    </div>
    </td>
  </tr> 
     
</div>


</template>

<script lang="ts">
import Vue from 'vue';
import Perso from '@/models/perso';


export default Vue.extend({
  props: {
    perso: Object as () => Perso,
  },
  data(): { newPersoName: string,newPersoTraits: string,newPersoHealth: number,newPersoAttack: number } {
    return {
      newPersoName: this.perso.name,
       newPersoTraits: this.perso.traits,
        newPersoHealth: this.perso.health,
         newPersoAttack: this.perso.attack,
      
    };
  },
  watch: {
    'perso.done'(newValue) {
      this.$store.dispatch('persos/setDone', {
        perso: this.perso,
        done: newValue,
      });
    },
  },
  methods: {
    enterEditMode(): void {
      if (!this.perso.done) {
        this.$store.dispatch('persos/enterEditMode', { perso: this.perso });

        Vue.nextTick().then(() =>
          (this.$refs.newNameInput as HTMLInputElement).focus(),
        );
      }
    },
    setName(): void {
      this.$store.dispatch('persos/quitEditMode');

      if (this.newPersoName.length) {
        this.$store.dispatch('persos/setName', {
          perso: this.perso,
          name: this.newPersoName,


        });
      }
           if (this.newPersoTraits.length) {
        this.$store.dispatch('persos/setTraits', {
          perso: this.perso,
          traits: this.newPersoTraits,


        });
      }
            if (this.newPersoHealth) {
        this.$store.dispatch('persos/setHealth', {
          perso: this.perso,
          health: this.newPersoHealth,


        });
      }
            if (this.newPersoAttack) {
        this.$store.dispatch('persos/setAttack', {
          perso: this.perso,
          attack: this.newPersoAttack,


        });
      }
           
      

    },
  },
});
</script>

<style lang="scss" scoped>
.perso__health{
  color:green;
}
.perso__attack{
  color:red;
}

</style>