<template>
  <div class="newArrival" :arrival="arrival">
    <div class="newArrival_imgContainer">
        <img class="newArrival_img" :src="arrival.img" alt="">
    </div>
    <div class="newArrival_textContainer">
        <div class="newArrival_header">
            <div class="nA_headertxt">{{  arrival.header}} </div>
            <div class="nA_headerIconHolder"><v-icon>{{ arrival.icon }} </v-icon></div>
        </div>
        <div class="newArrival_subtitle">{{ arrival.subtitle }} </div>
        <div class="newArrival_price"> {{ arrival.price }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'newArrivals',

  props:{
    arrival: Object,
  },
}
</script>
