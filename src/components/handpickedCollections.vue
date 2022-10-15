<template>
  <div class="handPicked" :handpick="handpick">
    <div class="handPicked_imgHolder">
      <v-img class="handPicked_img" :src="handpick.img" alt="">
        <div class="handPicked_title">{{ handpick.title }} </div>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'handPickedCollections',
  props: {
    handpick: Object,
  }

}
</script>
