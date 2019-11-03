<template>
  <div>
    <h3>Welcome to lotr-battle</h3>
    <br>
    <h5>The purpose of this application is to create your champion to make him fight with characters from the Lord of the Rings</h5>
    <br>
  
    <ListPersos />
  </div>
</template>

<script>
import ListPersos from '@/components/ListPersos/ListPersos.vue'
export default {
  name: 'home',
  components: {
    ListPersos,
  }
}
</script>
<style lang="css" scoped>
h3,h5{
  text-align: center;
}
@media screen and (max-width: 400px) {
 h5{
   font-size: 1.2em;
 }
 h3{
   font-size: 1.5em;
 }
}
</style>
