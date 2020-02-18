<template>
     <social-sharing 
        :title="'Vi ses på ' + venueName +'!'"
        :description="venueName +', ' + venueStreet + '.'"
        quote="Hej! Vad tror du om att träffas Här?"
        inline-template>
  <div>
      <network network="email">
          <i class="fa fa-envelope"></i> <img src="~/assets/images/at.png" class="sharing-icon">
      </network>
      <span class="social-sharing-text">eller</span>
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> <img src="~/assets/images/whatsapp.png" class="sharing-icon">
      </network>
  </div>
</social-sharing>
</template>

<script>
export default {
  props: [
    'venueName',
    'venueStreet'
  ]
}
</script>

<style>
  .sharing-icon {
    height: 50px;
  }

  .social-sharing-text {
    margin: 0 1rem
  }
</style>