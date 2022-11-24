<template>
  <div class="order">
    <v-tabs
      v-model="tab"
      background-color="#f1f1f1"
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <div class="orderDetails">
          <div class="od_upperSection">
            <div class="top_table">
              <div class="odt_title">prod</div>
              <div class="tt_right">
                <div class="odt_title">p</div>
                <div class="odt_title">r</div>
                <div class="odt_title">c</div>
              </div>
            
            </div>
            <div class="devider my-1"></div>
            <div class="od_upperTwo">
                <div class="comp_Holder mt-2">
                  <my-cart-component
                  v-for="(s, index) in cartComponent"
                  :key="index"
                  :comp="s"
                />
                </div>
                <div class="bt_right my-2">
                  <div class="bt_title">1</div>
                  <div class="bt_title">2</div>
                  <div class="bt_title">3</div>
                </div>
              </div>
          </div>
          <div class="odbuttom_section">
            <div class="head_devide my-6">
                <div class="header_txt mb-2">Order Summary</div>
                <v-divider></v-divider>
              </div>
              <div class="odb_left">
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

              </div>
              <div class="odb_mid"></div>
              <div class="odb_right"></div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import MyCartComponent from './myCartComponent.vue';
import cImg from "../assets/arrivals/bagFour.jpg";
export default {
  components:{
    MyCartComponent,
  },
  data () {
      return {
        tab: null,
        items: [
          { tab: 'Items Ordered', content: 'Tab 1 Content' },
          { tab: 'Inovices', content: 'Tab 2 Content' },
          { tab: 'Order Shipment', content: 'Tab 3 Content' },
        
        ],
        cartComponent: [
        {
          img: cImg,
          title: "Coach",
          subtitle: "Leather Coach Bag",
        },],
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
      }
    },

}
</script>

