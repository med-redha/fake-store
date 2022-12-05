<template>
  <v-hover v-slot="{hover}">
  <div class="skinCare my-10" :skin="skin">
    <div class="skinCare_imgHolder">
      <v-img class="skinCare_img" :src="skin.img" alt="" :class="hover ? 'skin_hover' : ''">
        <div class="skinCareTxt_holder">
          <div class="skinCare_txt">{{ skin.header }}</div>

          <v-btn fab small>
            <v-icon color="#A53F64">{{ skin.icon }}</v-icon>
          </v-btn>
        </div>
      </v-img>
    </div>
  </div>
</v-hover>
</template>

<script>
export default {
  name: "skinCare",
  props: {
    skin: Object,
  },
};
</script>
