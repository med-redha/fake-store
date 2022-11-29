<template>
  <div class="brands" :brd="brd" >
    <div class="brands_logoHolder">
        <img class="brands_logo" :src="brd.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
name:'brandsComponent',
props:{
  brd: Object,
}
}
</script>
