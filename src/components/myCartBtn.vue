<template>
   <div class="mCartSecComponent" :sec="sec">
      <div class="mCcst_txtGrp my-6">
        <div class="mCcst_titlOne mr">{{ sec.price }}</div>
        <div class="mCcst_titlTwomr-4">{{ sec.qty }}</div>
        <div class="mCcst_titlThree">{{ sec.subtotal }}</div>
      </div>
      <div class="mCcst_btnGrp ml-2" >
        <v-btn class="mCcst_btnOne" text  small><span class="txtOne">{{ sec.btnOne }}</span></v-btn>
        <v-btn class="mCcst_btnTwo" text small><span class="txtTwo">{{  sec.btnTwo }}</span></v-btn>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        sec: Object,
    }

}
</script>

<style>

</style>