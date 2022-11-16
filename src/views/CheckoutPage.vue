<template>
    
   
    <div class="checkOut my-12">
    <div class="breadCrumbs"></div>
    <div class="pageTitle mb-10">Checkout</div>
    <div>
    <v-row>
      <v-col cols="7">
        <div class="choSecOne my-8">
        <div class="secO_partOne ">
          <div class="details_holder ">
           <div class="holder_pOne">
            <div class="holder_title">FUll Name</div>
            <input class="txtF_gnrl" type="text" placeholder="ENter Name">
           </div>
           <div class="holder_pTwo">
            <div class="holder_title ml-4"> Mobile Number</div>
            <div class="txtF_grp">
              <input  class="txtF_num ml-4 mr-3" type="text" placeholder="+11">
              <input class="txtF_gnrl" type="text" placeholder="Enter Number">
            </div>
           </div>
          </div>
          <div class="details_holder my-12">
           <div class="holder_pOne">
            <div class="holder_title ">Street Adress</div>
            <input class="txtF_gnrl " type="text" placeholder="ENter Adress">
           </div>
           <div class="holder_pTwo">
            <div class="holder_title ml-4">State</div>
            <div class="txtF_grp">
              <input class="txtF_gnrl ml-4" type="text" placeholder="Enter State">
            </div>
           </div>
          </div>
          <div class="details_holder my-10">
           <div class="holder_pOne">
            <div class="holder_title">City</div>
            <input class="txtF_gnrl" type="text" placeholder="Enter City">
           </div>
           <div class="holder_pTwo ">
            <div class="holder_title ml-4">Pin Code</div>
            <div class="txtF_grp">
              <input class="txtF_gnrl ml-4" type="text" placeholder="Enter Pin Code">
            </div>
           </div>
          </div>
        </div>
        <div class="secO_partTwo ">
          <div class="mt-6 mb-8"><v-select color="black"
          :items="items"
          label="Select Payment Method"
        ></v-select></div>
          <div class="secPartOne_btnGrp">
            <v-btn color="#1B4B66" height="44" width="136" text to="/mycart"><span>Back to Cart</span></v-btn>
            <v-btn depressed height="44" width="136" color="#1B4B66" dark to="/payment"><span>Next</span></v-btn>
          </div>
        </div>
      </div>
      </v-col>
      <v-col cols="4">
      <div class="choSecTwo ml-12">
        <div class="secT_partOne">
          
          <my-cart-component  v-for="(s, index) in cartComponent"
                  :key="index"
                  :comp="s"  class="my-6"/>
        </div>
        <div class="Os_titleHolder my-10">
            <div class="or_title mb-2">Order Summary</div>
            <div class="sectwo_devider"></div>
          </div>
          
        <div class="secT_partTwo">
          <div class="mCst_details my-6" >
            <div class="Os_titleHolder mb-8">
            <div class="or_title mb-2">Order Details</div>
            <div class="sectwo_devider"></div>
          </div>
              <div class="mCst_detailsContainer my-3" v-for="(txt,index) in sectionTwoTxt" :key="index">
                <div class="mCst_detailsTxt"> {{txt.title}}</div>
              <div class="mCst_detailsNum"> {{txt.content}}</div>
              </div>
              
            </div>
            <div class="Tot d-flex mb-6 " v-for="(tot, i) in Total" :key="i">
              <div class="tot_txt"> {{tot.title}}</div>
              <div class="tot_num"> {{tot.content}}</div>
            </div>
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
export default {
name: 'checkOut',
components:{
  MyCartComponent,
},
data (){
  return{
    
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
}
}
</script>

