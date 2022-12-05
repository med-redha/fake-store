<template>
  <v-hover v-slot="{hover}">
  <div class="brands" :brd="brd" >
    <div class="brands_logoHolder" :class="hover ? 'brand_hover' : ''">
        <img class="brands_logo" :src="brd.img" alt="" >
    </div>
  </div>
</v-hover>
</template>

<script>
export default {
name:'brandsComponent',
props:{
  brd: Object,
}
}
</script>
