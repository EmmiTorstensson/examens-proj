<template>
     <social-sharing 
        :title="'Vi ses på ' + venueName +'!'"
        :description="venueName +', ' + venueStreet + '.'"
        quote="Hej! Vad tror du om att träffas Här? "
        inline-template>
  <div>
      <network network="email">
          <i class="fa fa-envelope"></i> Email
      </network>
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="sms">
        <i class="fa fa-commenting-o"></i> SMS
      </network>
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
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
