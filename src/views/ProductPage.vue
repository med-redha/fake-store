<template>
  <div class="product">
    <div class="bread my-8"></div>
    <v-row>
      <v-col>
        <div class="display_container">
          <div class="productDisplay">
            <div class="productDisplay_mainHolder">
              <img class="productDisplay_mainImg" :src="display.main" alt="" />
              <div class="slot my-8">
                <v-btn text class="mr-4">
                  <v-icon large>mdi-chevron-left</v-icon>
                </v-btn>
                <slot>
                  <img class="slt mr-4" :src="display.main" alt="" />
                </slot>
                <slot>
                  <img class="slt mr-4" :src="display.main" alt="" />
                </slot>
                <slot>
                  <img class="slt mr-4" :src="display.main" alt="" />
                </slot>
                <slot>
                  <img class="slt" :src="display.main" alt="" />
                </slot>
                <v-btn text class="ml-4">
                  <v-icon large>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="characteristic_container my-4">
          <div class="characteristic_upSection ml-4">
            <div class="characteristic_header">Coach</div>
            <div class="characteristic_subHeader my-4">
              Leather Coach Bag with adjustable starps.
            </div>
            <div class="characteristic_ratingGrp my-4 ">
              <v-icon v-for="i in 5" :key="i" color="yellow" class="strs"
                >mdi-star</v-icon
              >
              <div class="rates ml-2">(250) Ratings</div>
            </div>
            <div class="characteristic_priceHolder ml-3">
              <div class="chNew_price mr-2">$54.69</div>
              <div class="chOld_price mr-2">$78.66</div>
              <div class="chDiscount">50%OFF</div>
            </div>
            <v-divider></v-divider>
          </div>
          <div class="characteristic_DQ my-6 ml-4">
            <div class="ch_delivery">
              <div class="ch_deliveryTxt">
                <div class="ch_deliveryTitle">Delivery Details</div>
                <div class="ch_deliverySubtitle">
                  Check estimated delivery date/pickup option.
                </div>
              </div>
              <div class="ch_deliveryBtnGrp mt-10">
                <input
                  class="ch_deliveryInp"
                  placeholder="Apply Valid Pincode"
                  type="text"
                />
                <v-btn class="ch_deliveryBtn" text>check</v-btn>
              </div>
            </div>
            <div class="ch_quantity my-10 ml-2">
              <div class="Q_tx mr-2">Qantity:</div>
              <div class="Q_tri">
                <v-btn min-width="24px" icon>
                  <v-icon small>mdi-minus</v-icon>
                </v-btn>
                <input class="Q_inp mx-2" placeholder="0" />
                <v-btn min-width="24px" icon>
                  <v-icon small class="Q_icn">mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="characteristic_coponHolder my-10 ml-5">
            <div class="copns">
              <div class="characteristic_Copon">
                <div class="copon_details pl-2">
                  <div class="cp_title">
                    Get upto 30% Off on order value above $100
                  </div>
                  <div class="cp_subtitle mt-4">Terms & Conditions</div>
                </div>
                <div class="copon_btn mr-2 mb-6">
                  <div class="cpb_title">Use Code</div>
                  <div class="cpb_subtitle mt-2">ORDER100</div>
                </div>
              </div>
            </div>
          </div>
          <div class="characteristic_buttonGroup my-12 ">
            <v-btn
              class="chBtn_one mx-6"
              dark
              depressed
              color="#1b4b66"
              width="240px"
              height="44px"
            >
              <v-icon color="white">mdi-basket-check-outline</v-icon>
              <span class="v-btn__content">Add to bag</span>
            </v-btn>

            <v-btn
              class="chBtn_two"
              outlined
              depressed
              width="240px"
              height="44px"
            >
              <v-icon>mdi-heart-outline</v-icon>Add To Wishlist
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="product_sectionTwo my-4">
      <div class="tabCard_container">
        <div class="pSection_two">
          <v-tabs
            v-model="tab"
            color="indigo"
            background-color="#F1F1F1"
            class="raduis"
          >
            <v-tab v-for="(ti, index) in items" :key="index">
              {{ ti.tab }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(ti, index) in items" :key="index">
              <v-card flat>
                <v-card-text>{{ ti.content }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainImg from "../assets/arrivals/bagFour.jpg";
export default {
  name: "productPage",
  data() {
    return {
      display: {
        main: mainImg,
      },
      tab: null,
      items: [
        {
          tab: "Product Description",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. ",
        },
        {
          tab: "Related Products",
          content:
            "Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. ",
        },
        {
          tab: "Ratings and Reviews",
          content:
            "Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.",
        },
      ],
    };
  },
};
</script>
