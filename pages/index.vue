<template>
  <div class="container">
      <h1>Tjena!</h1> 
      <h2 v-for="venue in venues" :key="venue.name">
        {{ venue.name }}
      </h2>
      <button @click="randomNum">Num</button>
  </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js';

export default {
    data() {
      return {
        venues: [],
        venue:[]
      }
    },
    created () {
      fireDb.collection('venues').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc);
            const data = {
              'id': doc.id,
              'veuneID': doc.data().veuneID,
              'name': doc.data().name,
              'city': doc.data().city,
              'street': doc.data().street
            }
            this.venues.push(data)
          })
        })
    },
    methods: {
      randomNum () {
        const num = Math.ceil(Math.random()*2)
        console.log(num);
      }
    }
}

</script>

<style>

</style>
