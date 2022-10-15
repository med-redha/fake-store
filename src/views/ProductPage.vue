<template>
  <div class="product">
    <div class="bread"></div>
    <div class="product_sectionOne">
      <div class="display_container">

      </div>
      <div class="characteristic_container">
        <div class="characteristic_upSection">
          <div class="characteristic_header">Coach</div>
          <div class="characteristic_subHeader">Leather Coach Bag with adjustable starps.</div>
          <div class="characteristic_ratingGrp"></div>
          <div class="characteristic_priceHolder">
            <div class="chOld_price">$78.66</div>
            <div class="chNew_price">$54.69</div>
            <div class="chDiscount">50%OFF</div>
          </div>
        </div>
        <div class="characteristic_DQ">
          <div class="ch_delivery">
            <div class="ch_deliveryTxt">
              <div class="ch_deliveryTitle"></div>
              <div class="ch_deliverySubtitle"></div>
            </div>
            <div class="ch_deliveryBtnGrp">
              <input class="ch_deliveryInp" placeholder="Apply Valid Pincode" type="text">
              <v-btn class="ch_deliveryBtn">check</v-btn>
            </div>
          </div>
          <div class="ch_quantity"></div>
        </div>
        <div class="characteristic_coponHolder">
          <div class="characteristic_Copon">
            <div class="copon_details"></div>
            <v-btn class="copon_btn"> check</v-btn>
          </div>
        </div>
        <div class="characteristic_buttonGroup">
          <v-btn class="chBtn_one"><v-icon>mdi-basket-check-outline</v-icon>Add to bag</v-btn>
          <v-btn class="chBtn_two"><v-icon>mdi-heart-outline</v-icon>Add To Wishlist</v-btn>
        </div>
      </div>
    </div>
    <div class="product_sectionTwo">
      <div class="tabCard_container"></div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>
