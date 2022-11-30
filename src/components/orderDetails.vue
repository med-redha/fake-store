<template>
  <div class="order mr-2 mb-6">
    <v-icon @click="order()" large class="my-4">mdi-chevron-left</v-icon>
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
        <div class="orderDetails mr-2">
          <div class="od_upperSection">
            <div class="top_table">
              <div class="odt_title">{{topTable.title}}</div>
              <div class="tt_right">
                <div class="odt_title">{{topTable.pr}}</div>
                <div class="odt_title">{{topTable.quan}}</div>
                <div class="odt_title">{{topTable.sub}}</div>
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
                <div class="bt_right my-3 mr-1">
                  <div class="bt_title mr-1">{{topTable.price}}</div>
                  <div class="bt_title mr-3">{{topTable.quantity}}</div>
                  <div class="bt_title">{{topTable.subtotal}}</div>
                </div>
              </div>
          </div>
          <div class="odbuttom_section">
            <div class="head_devide my-6">
                <div class="header_txt mb-2">Order Summary</div>
                <v-divider></v-divider>
              </div>
              <div class="btmsec_container">
              <div class="odb_left">
                <div class="mCst_details " >
              <div class="mCst_detailsContainer " v-for="(txt,index) in sectionTwoTxt" :key="index">
                <div class="mCst_detailsTxt mb-2"> {{txt.title}}</div>
              <div class="mCst_detailsNum my-2"> {{txt.content}}</div>
              </div>
              
            </div>
            <div class="Tot d-flex my-4" v-for="(tot, i) in Total" :key="i">
              <div class="tot_txt"> {{tot.title}}</div>
              <div class="tot_num"> {{tot.content}}</div>
            </div>

              </div>
              <div class="odb_mid">
                <div class="odbm_title">{{middleSide.title}}</div>
                <div class="odbm_subt">{{middleSide.subtitle}}</div>
              </div>
              <div class="odb_right mr-6">
                <div class="odbr_title">{{rightSide.title}}</div>
                <div class="odb_adrss">
                <div class="odbr_combo">
                  <div class="odbr_sub">{{rightSide.subtitle}}</div>
                  <v-btn  depressed>{{rightSide.btnOne}}</v-btn>
                </div>
                <div class="odbr_sub my-3">{{rightSide.street}}</div>
                <div class="odbr_sub my-3">{{rightSide.state}}</div>
                <div class="odbr_sub my-3">{{rightSide.phonenum}}</div>
              </div>
                <div class="odbr_btnGroupe mb-2  mt-8">
                  <v-btn depressed color="#1B4B66" dark width="136" height="44" class="mr-6" >{{rightSide.btnTwo}}</v-btn>
                  <v-btn outlined color="#1B4B66" width="136" height="44">{{rightSide.btnThree}}</v-btn>
                </div>
              </div>
            </div>
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
  name:'orderDetails',
  components:{
    MyCartComponent,
  },
  data () {
      return {
        awsome:false,
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
        topTable:{
            title:"Product Name",
            pr:"price",
            quan:"Qty",
            sub:"Subtotal",
            price:"$54.69",
            quantity:"2",
            subtotal:"$109.38",
        },
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
       rightSide:{
        title:"Address Details",
        subtitle:"Vincent Lobo",
        btnOne: "Home",
        street:"3068  Woodlawn Drive",
        state:"Milwaukee",
        phonenum:"414-672-5388",
        btnTwo:"Reorder",
        btnThree:"Add Rating",
       },
       middleSide:{
        
          title:"Payment Details",
          subtitle:"Cash on Delivery",
        
      },
      }

    },
    methods:{
      order(){
        this.$emit("orders")
      }
    }

}
</script>

