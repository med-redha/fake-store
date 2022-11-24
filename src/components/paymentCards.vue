<template>
  <div class="paymentCard" :pay="pay">
    <div class="checkbox_holder">
      <v-radio-group v-model="radios" >
        <v-radio label="" value="radio-1" v-on:click="googlePlay"></v-radio>
      </v-radio-group>
    </div>
    <div class="img_holder">
      <v-img class="pay_img" :src="pay.img" alt=""> </v-img>
    </div>
    <span class="title_txt mt-1">{{ pay.title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radios: null,
    };
  },
  props: {
    pay: Object,
  },
};
</script>

<style></style>
