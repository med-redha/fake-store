<template>
  <div class="myCart">
    <div class="bread"></div>
    <div class="cart_name my-8">myCart</div>
    <div class="mC_container">
      <v-row>
        <v-col cols="7">
          <div class="mCsection_one mr-12">
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
              <div class="componentOne my-2">
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
            <div class="mCsoSub_header mt-12 mb-2">
              <v-select :items="items" label="Apply Copon Code" class="slct" light>
                {{items}}
              </v-select>
            </div>
            <div class="mCso_btnGrp mb-8 mt-4">
              <input class="mCso_input pl-4" type="text"  placeholder="Apply Copon Code"/>
              <v-btn class="mCso_btn" text>check</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="5">
          <div class="mCsection_two ml-4 mt-3">
            <div class="mCst_header mb-6">
              <div class="head_devide">
                <div class="header_txt mb-2">Order Summary</div>
                <v-divider></v-divider>
              </div>

            </div>
            
            <div class="mCst_details my-4" >
              <div class="mCst_detailsContainer my-2" v-for="(txt,index) in sectionTwoTxt" :key="index">
                <div class="mCst_detailsTxt"> {{txt.title}}</div>
              <div class="mCst_detailsNum"> {{txt.content}}</div>
              </div>
              
            </div>
            <div class="Tot d-flex mb-6" v-for="(tot, i) in Total" :key="i">
              <div class="tot_txt"> {{tot.title}}</div>
              <div class="tot_num"> {{tot.content}}</div>
            </div>
            <div class="mCst_btnGrp">
              <v-btn class="mCst_btnOne mr-6" depressed to="/checkout"><span class="btn_span">Place Order</span></v-btn>
              <v-btn class="mCst_btnTwo " outlined to="/product"><span class="btn_span">Continue Shopping</span> </v-btn>
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
       sectionTwoTxt:[
        {
          title: 'sub Total',
          content: '$119.69',
        },
        {
          title: 'Discount',
          content: '-$13.40',
        },
        {
          title: 'Delivery Fee',
          content: '-$0.00',
        },

       ],
       Total:[
        {
          title: 'Grand Total',
          content: '$106.29',
        },
       ],
      

      items:["Apply Coupon Code"],
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
