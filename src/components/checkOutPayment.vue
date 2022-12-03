<template>
  <div class="ch_payment">
    <div class="pageTitle">CHeckout</div>
    <v-row>
      <v-col cols="8">
        <div class="payment_sectionOne">
          <div></div>
          <div>selector</div>
          <div class="payment_cardsContainer">
            <payment-cards
              v-for="(l, index) in payCards"
              :key="index"
              :pay="l"
              class="mr-6 mb-6"
            />
          </div>
          <div class="paymentDetails_card my-4">
            <div class="pdc_partOne">
              <div class="pdc_section">
                <div class="pdc_topSection">
                  <div class="pdc_imgHolder">
                    <img class="pdc_img" src="../assets/pay/upi.svg" alt="" />
                  </div>
                  <div class="pdc_title ml-4">Google Pay</div>
                </div>
                <div class="pdcbtm_section">
                  <input
                    class="pdc_input"
                    type="text"
                    placeholder="Enter Your UPI Id"
                  />
                  <div class="exmpl_txt">Eg: 1234567890@ybl</div>
                  <div class="check_holder">
                    <v-checkbox
                      label="Save this for future transactions"
                    ></v-checkbox>
                  </div>
                </div>
              </div>
              <div class="rad_holder">
                <v-radio-group v-model="radios">
                  <v-radio label="" value="radio-2"></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="pdc_partTwo">
              <div class="part_twoOne">
                <div class="pdc_twoImgholder">
                  <img class="pe_img" src="../assets/pay/apple.svg" alt="" />
                </div>
                <div class="title_txt ml-4">phone pe</div>
              </div>
              <div class="radio_holder">
                <v-radio-group v-model="radios">
                  <v-radio label="" value="radio-3"></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="pdc_partThree">
              <div class="part_left">
                <div class="pt_imgHolder">
                  <img class="pt_img" src="../assets/pay/apple.svg" alt="" />
                </div>
                <div class="ptitle_txt ml-4">Paytm</div>
              </div>
              <div class="part_right">
                <v-radio-group v-model="radios">
                  <v-radio label="" value="radio-1"></v-radio>
                </v-radio-group>
              </div>
            </div>
          </div>
          <div class="pay_btnGrp my-4">
            <v-btn height="44" width="136" color="#1b4b66" text to="/checkout"
              ><span>Back to Cart</span></v-btn
            >
            <v-btn
              depressed
              dark
              color="#1b4b66"
              height="44"
              width="136"
              to="/userProfile"
              ><span>Next</span></v-btn
            >
          </div>
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
import upi from "../assets/pay/upi.svg";
import apple from "../assets/pay/apple.svg";
import amazon from "../assets/pay/amazon.svg";
import credit from "../assets/pay/credit.png";
import cImg from "../assets/arrivals/bagFour.jpg";
import paymentCards from "../components/paymentCards.vue";
import MyCartComponent from "../components/myCartComponent.vue";
export default {
  components: {
    MyCartComponent,
    paymentCards,
  },
  data() {
    return {
      radios: null,
      payCards: [
        {
          img: upi,
          title: "UPI",
        },
        {
          img: credit,
          title: "Credit/Debit Card",
        },
        {
          img: apple,
          title: "Apple Pay",
        },
        {
          img: amazon,
          title: "Amazon Pay",
        },
      ],
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
