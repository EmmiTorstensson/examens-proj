<template>
  <div class="container">
      <h1>Tjena!</h1> 
      <p></p>
  </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js';
import Venues from '@/services/Venues';

export default {
  async asyncData () {
        console.log("start")
        let venues = fireDb.collection('venues')
        try {
            var allVenuesSnapShot = await venues .get();
            allVenuesSnapShot.forEach(doc => {
            console.log(doc.id, '=>', doc.data().name);
        });
        console.log("end")
        } catch (err) {
            return {
                venues: [],
            }
        }
    },
}

</script>

<style>

</style>
