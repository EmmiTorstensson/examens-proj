<template>
  <div class="container">
      <h1>Tjena!</h1> 
      <h3>{{ venue.name }}</h3>
      <button @click="randomVenue">Venue</button>
  </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js';

export default {
    data() {
      return {
        venues: [],
        venue: []
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
        }).then(this.randomVenue.bind(this))
    },
    methods: {
        randomVenue () {
          var chosenNumber = Math.floor(Math.random() * this.venues.length);
          this.venue = this.venues[chosenNumber];
        }
    }
}

</script>

<style>


</style>
