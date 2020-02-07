<template>
  <div class="container">

    <div class="block-1">
      <h1 class="my-header">FANCY NAME</h1>
    </div>

    <div class="block-2">
      <div class="block-2-inner-container">
        <div
            class="venue-image" 
            :style="{ backgroundImage: 'url(' +  venue.image + ')'}">
        </div>

        <div class="text-content-container">
          <div class="venue-name">{{ venue.name }}</div>
          <div class="venue-street"> {{ venue.street }}</div>
        </div>
      </div>
    </div>

    <div class="block-3"></div>

    <social-sharing @open="open()" @change="change()" @close="close()">
    </social-sharing>
  </div>
</template>

<script>
import SocialSharing from '~/components/SocialSharing.vue';
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
              'street': doc.data().street,
              'image': doc.data().imageURL
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
    },
    components: {
      SocialSharing
    }
}

</script>

<style>
.container {
  height: 100vh;
  background-color: aliceblue;
}
.block-1{
  height: 15vh;
  background-color: aqua;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.block-3{
  height: 15vh;
  width: 100%;
  background-color: pink;
  bottom: 0;  
}

/* BLOCK 1 */ 

.my-header {
  font-size: 3em;
}




/* BLOCK 2 */ 

.block-2{
  height: 70vh;
  background-color: lavender;
  width: 100%;
}

.block-2-inner-container {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
}

.venue-image {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 1
  }
.text-content-container {
  width: 100%;
  height: 20%;
  z-index: 2;
  position: absolute;
  bottom: 0;
  color: #fff;
}
.venue-name {
  font-size: 2em;
  margin-left: 20px;
  font-weight: bold;
}



/* BLOCK 3 */ 



/*
.headline {
  text-align: center
}
.first-look-container {
    max-width: 500px;
    height: auto;
    margin: 0 auto;
    display: flex;
    position: relative;
  }
.first-look-image-container {
    min-width: 100%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    position: relative;
  }
.venue-image {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
  }
.venue-info {
  z-index: 2;
  position: absolute;
  bottom: 0;
  color: #fff;
}

.first-look-btn-container {
  position: absolute;
  bottom: 0;
  height: 10%;
  width:100%;
  background-color: pink;
  padding-top: 10px;
}

.first-look-btn-inner-container {
  background-color: aquamarine;
  height: 100%;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 100%;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}

/* BUTTON */ 
/*
.round-button {
	width:10%;
}
.round-button-circle {
	width: 100%;
	height:0;
	padding-bottom: 100%;
  border-radius: 50%;
  overflow:hidden;
  background:red; 
}
.round-button-circle:hover {
	background:rgb(204, 1, 1);
  color: #fff 
}
.round-button a {
  display:block;
	float:left;
	width:100%;
	padding-top:50%;
  padding-bottom:50%;
	line-height:1em;
	margin-top:-0.5em;
    
	text-align:center;
	color:#e2eaf3;
    font-family:Verdana;
    font-size:1.2em;
    font-weight:bold;
    text-decoration:none;
}

@media (max-width: 767px) {
  .container {
    width: 100%;
    height: 100%;
  }
  .first-look-container {
    height: 100vh;
  }

}
*/
</style>

