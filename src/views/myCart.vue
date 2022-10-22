<template>
  <div class="myCart">
    <div class="bread"></div>
    <div class="cart_name my-8">myCart</div>
    <div class="mC_container">
      <v-row>
        <v-col cols="8">
          <div class="mCsection_one">
            <div class="mCso_table">
              <div class="mCsoTitle_head">Product Name</div>
              <div class="midTitle_holder">
                <div class="mCsoTitle">Price</div>
                <div class="mCsoTitle ml-4">Qty</div>
                <div class="mCsoTitle">Subtotal</div>
              </div>
            </div>
            <v-divider></v-divider>

            <div class="mCsoComponent_container my-8">
              <div class="componentOne">
                <my-cart-component
                  v-for="(s, index) in cartComponent"
                  :key="index"
                  :comp="s"
                />
              </div>
              <div class="componentTwo">
                <my-cart-btn
                  v-for="(sec, i) in sectionTwo"
                  :key="i"
                  :sec="sec"
                />
              </div>
            </div>
            <div class="mCsoSub_header my-12"></div>
            <div class="mCso_btnGrp">
              <input class="mCso_input" type="text" />
              <v-btn class="mCso_btn">gfdgdfg</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="mCsection_two">
            <div class="mCst_header">Order Summary</div>
            <div class="mCst_details">
              <div class="mCst_detailsTxt"></div>
              <div class="mCst_detailsNum"></div>
            </div>
            <div class="mCst_btnGrp">
              <v-btn class="mCst_btnOne">cs</v-btn>
              <v-btn class="mCst_btnTwo">Po</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import cImg from "../assets/arrivals/bagFour.jpg";
import MyCartComponent from "../components/myCartComponent.vue";
import MyCartBtn from "../components/myCartBtn.vue";
export default {
  name: "myCart",
  components: {
    MyCartComponent,
    MyCartBtn,
  },
  data() {
    return {
      cartComponent: [
        {
          img: cImg,
          title: "Coach",
          subtitle: "Leather Coach Bag",
          subhead: "Qty- 1",
        },
        {
          img: cImg,
          title: "Coach",
          subtitle: "Leather Coach Bag",
          subhead: "Qty- 1",
        },
      ],
      sectionTwo: [
        {
          price: "$54.69",
          qty: "1",
          subtotal: "$54.69",
          btnOne: "Move to Wishlist",
          btnTwo: "Remove",
        },
        {
          price: "$54.69",
          qty: "1",
          subtotal: "$54.69",
          btnOne: "Move to Wishlist",
          btnTwo: "Remove",
        },
      ],
    };
  },
};
</script>
