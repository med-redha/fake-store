<template>
  <v-hover v-slot="{hover}">
  <div class="handPicked" :handpick="handpick">
    <div class="handPicked_imgHolder">
      <v-img class="handPicked_img" :src="handpick.img" alt="" :class="hover ? 'hand_hover' : ''">
        <div class="handPicked_title">{{ handpick.title }} </div>
      </v-img>
    </div>
  </div>
</v-hover>
</template>

<script>
export default {
  name: 'handPickedCollections',
  props: {
    handpick: Object,
  }

}
</script>
