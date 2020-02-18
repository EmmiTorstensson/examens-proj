<template>
  <div class="container">
    <div class="first-look-container" v-if="venues.length > 0">
      <div class="block-1 my-header">
        TRÄFF
      </div>

      <div class="block-2">
        <div class="block-2-inner-container">
            <div
                class="venue-image" 
                :style="{ backgroundImage: 'url(' +  venue.image + ')'}">
            </div>
            <div>
              <img src="~/assets/images/info-icon.png" class="info-icon">
            </div>


          <div class="text-content-container" v-show="!showInfo">

            <div class="venue-name">{{ venue.name }}  
              <button>
                <img src="~/assets/images/info-icon.png" class="info-icon" @click="showInfo = !showInfo">
              </button>
            </div>

            <div class="venue-street">
              <img src="~/assets/images/pin.png" class="info-icon"> {{ venue.street }}
            </div>

          </div>

          <div class="close-info" v-show="showInfo">
            <img src="~/assets/images/cancel.png" class="cancel-icon"  @click="showInfo = !showInfo">
          </div>

        </div>
      </div>

      <div class="second-look-container" v-show="showInfo" transition="fade">
        <div class="second-look-inner-container">
          <div class="info-name"> {{ venue.name }} <span>{{ venue.price }}</span></div>
          <div class="info-street"> {{ venue.street }}</div>
          <div class="info-district"> {{ venue.district }}</div>
          <div class="info-description"> {{ venue.description }}</div>
        </div>
      </div>

        <div class="block-3">
          <img src="~/assets/images/correct.png" class="cta-icon" v-b-modal="'my-modal'"> 
          <img src="~/assets/images/no-icon.png" class="cta-icon" @click="newVenue"> 
        </div>
      

        <b-modal id="my-modal" hide-footer="true">

          <div> Är du redo för en träff på <span class="bold">{{ venue.name }}</span>? </div>
          <social-sharing 
            @open="open()" 
            @change="change()" 
            @close="close()" 
            :venueName="venue.name"
            :venueStreet="venue.street">
          </social-sharing>
        </b-modal>
    
      
    </div>

    <div class="empty-array" v-else>
      <div class="block-1 my-header">
        TRÄFF
      </div>

      <div class="empty-array-inner-container">
        <div class="center-text">
          <div class="empty-array-text">Slut på lista :(</div>
          <div class="start-over">Börja om!</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SocialSharing from '~/components/SocialSharing.vue';
import {fireDb} from '~/plugins/firebase.js';

export default {
    data() {
      return {
        venues: [],
        venue: [],
        showInfo: false, 
      }
    },
    created () {
       fireDb.collection('venues').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc);
            const data = {
              'id': doc.id,
              'name': doc.data().name,
              'district': doc.data().district,
              'street': doc.data().street,
              'image': doc.data().imageURL,
              'description': doc.data().description,
              'price': doc.data().price
            }
            this.venues.push(data)
          })
        }).then(this.randomVenue.bind(this))
    },
    methods: {
        randomVenue () {
          var chosenNumber = Math.floor(Math.random() * this.venues.length);
          this.venue = this.venues[chosenNumber];
        },
        newVenue () {
          this.randomVenue()

          for( var i = 0; i < this.venues.length; i++){ 
              if ( this.venues[i].name === this.venue.name) {
                this.venues.splice(i, 1); 
            }
          }
        }
    },
    components: {
      SocialSharing
    }
}

</script>

<style>
.first-look-container {
  height: 100vh;
}

.block-1{
  height: 10vh;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* BLOCK 1 */ 

.my-header {
  font-size: 3em;

}


/* BLOCK 2 */ 

.block-2{
  height: 75vh;
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
  z-index: 2;
  position: absolute;
  bottom: 20px;
  color: #fff;

}
.venue-name {
  font-size: 2em;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.venue-street  {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 1.5em;
}

.info-icon {
  width: .8em;
  height: .8em;
}

.close-info {
  position: absolute;
  bottom: -1rem;
  z-index: 2;
  right: 20px;
}

.cancel-icon {
  height: 2rem;
  top:0
}

/* BLOCK 3 */ 


.block-3{
  height: 15vh;
  width: 100%;
  bottom: 0;  
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.cta-icon {
  height: 4.3rem;
  transition: linear .25s
}

/* SECOND LOOK */

.second-look-inner-container {
  padding: 20px;
  transition: .5s
}

.info-name {
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-name span {
  font-weight: lighter;
  font-size: 1.3rem;
}

.info-street {
  font-size: 1.2rem;
}


.info-district {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 15px;
}

/* EMPTY ARRAY */

.empty-array {
  width: 100%;
  height: 100vh;
}
.empty-array-inner-container {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty-array-text {
  width: 100%;
}
.start-over {
  width: 100%;
  color: blue
}

.start-over:hover {
  color: pink;
}

.center-text {
  text-align: center;
}

/* ANIMATION */ 

.cta-icon:active {
  animation: bounce .5s .5s;
  transform: scale(0.80);
}

@keyframes bounce {
  0% { transform: scale(1.1); opacity: 1 }
  50% { transform: scale(1.6); opacity: .7 }
  60% { transform: scale(0.6); opacity: 1 }
  80% { transform: scale(0.95) }
  100% { transform: scale(0.85) }
}

/* MODAL */


.modal-content {
  transform: translateY(150px);
  text-align: center;
}

.modal-header {
  border-bottom: 0px;
}
.modal-body {
  padding-bottom: 3rem;
  font-size: 1.5rem;
}

.modal-body div:first-child {
  margin-bottom: 2rem;
}

.bold {
  font-weight: bold;
}

.modal-footer {
  border-top: 0px;
}


/* LARG SCREEN */

@media (min-width: 992px) {
  .container, .container-sm, .container-md, .container-lg {
      max-width: 600px;
  }
}

</style>

