<template>
  <div class="ch_payment">
    <div>CHeckout</div>
    <v-row>
      <v-col cols="8">
        <div class="payment_sectionOne">

        </div>
      </v-col>
      <v-col cols="4">
        <div class="payment_sectionTwo">
          <div class="Os_titleHolder">
            <div class="or_title">Order Summaray</div>
            <div class="sectwo_devider"></div>
          </div>
          <my-cart-component
            v-for="(s, index) in cartComponent"
            :key="index"
            :comp="s"
            class="my-6"
          />
       
        
          <div class="mCst_details my-6">
            <div class="Os_titleHolder mb-8">
              <div class="or_title mb-2">Order Details</div>
              <div class="sectwo_devider"></div>
            </div>
            <div
              class="mCst_detailsContainer my-3"
              v-for="(txt, index) in sectionTwoTxt"
              :key="index"
            >
              <div class="mCst_detailsTxt">{{ txt.title }}</div>
              <div class="mCst_detailsNum">{{ txt.content }}</div>
            </div>
          </div>
          <div class="Tot d-flex mb-6" v-for="(tot, i) in Total" :key="i">
            <div class="tot_txt">{{ tot.title }}</div>
            <div class="tot_num">{{ tot.content }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import cImg from "../assets/arrivals/bagFour.jpg";
import MyCartComponent from "../components/myCartComponent.vue";
export default {

  components: {
    MyCartComponent,
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
      sectionTwoTxt: [
        {
          title: "sub Total",
          content: "$119.69",
        },
        {
          title: "Discount",
          content: "-$13.40",
        },
        {
          title: "Delivery Fee",
          content: "-$0.00",
        },
      ],
      Total: [
        {
          title: "Grand Total",
          content: "$106.29",
        },
      ],
    };
  },
};
</script>

