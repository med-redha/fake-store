<template>
  <div class="myCartComponent" :comp="comp">
    <div class="mCc_sectionOne">
      <div class="mCcImg_holder">
        <img class="mCc_img" :src="comp.img" alt="" />
      </div>
      <div class="mCcSecOne_txt">
        <div class="mCc_title">{{ comp.title }}</div>
        <div class="mCc_subtitle">{{ comp.subtitle }}</div>
        <div class="mCc_subhead">{{ comp.subhead }}</div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  props: {
    comp: Object,
  },
};
</script>
