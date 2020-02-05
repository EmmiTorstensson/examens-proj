   <h1 class="headline">Bror, vart ses vi?</h1>
      <div class="first-look-container">

        <div class="first-look-image-container">
          <div
            class="venue-image" 
            :style="{ backgroundImage: 'url(' +  venue.image + ')'}">
          </div>
          <div class="venue-info">
            <h3>{{ venue.name }}</h3>
          </div>
        </div>

        <div class="first-look-btn-container">
          <div class="first-look-btn-inner-container">
            <div class="round-button">
              <div class="round-button-circle">
                <a class="round-button" @click="randomVenue">X  </a>
              </div>
            </div>
          </div>
        </div>

      </div>
  </div>