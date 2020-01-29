<template>
  <div class="container">
      <h1>Tjena!</h1> 
  </div>
</template>

<script>
import db from '~/plugins/firebase.js'

export default {

    async asyncData ({ req, params }) {
        try {
            let res = await db.collection('venues').get()
            .then((snapshot) => {
              console.log(snapshot.docs);
            })
        return {
            venues: res,
        };
        } catch (err) {
            return {
                venues: [],
            }
        }
    },
  components: {
    Logo
  }
}
</script>

<style>

</style>
