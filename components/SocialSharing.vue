<template>
     <social-sharing url="https://vuejs.org/"
                      title="venueTitle"
                      description="venueStreet"
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
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
    'venueTitle',
    'venueStreet'
  ]
}
</script>
