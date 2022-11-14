<template>
    
   
    <div class="checkOut my-12">
    <div class="breadCrumbs"></div>
    <div class="pageTitle">Checkout</div>
    <div>
    <v-row>
      <v-col cols="7">
        <div class="choSecOne">
        <div class="secO_partOne">
          <div class="details_holder">
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
          <div class="details_holder">
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
          <div class="details_holder">
           <div class="holder_pOne">
            <div class="holder_title">City</div>
            <input class="txtF_gnrl" type="text" placeholder="Enter City">
           </div>
           <div class="holder_pTwo">
            <div class="holder_title ml-4">Pin Code</div>
            <div class="txtF_grp">
              <input class="txtF_gnrl ml-4" type="text" placeholder="Enter Pin Code">
            </div>
           </div>
          </div>
        </div>
        <div class="secO_partTwo">
          <div class="mt-6 mb-8"><v-select color="black"
          :items="items"
          label="Select Payment Method"
        ></v-select></div>
          <div class="secPartOne_btnGrp">
            <v-btn color="#1B4B66" height="44" width="136" text><span>Back to Cart</span></v-btn>
            <v-btn depressed height="44" width="136" color="#1B4B66" dark><span>Next</span></v-btn>
          </div>
        </div>
      </div>
      </v-col>
      <v-col cols="4">
      <div class="choSecTwo">
        <div class="secT_partOne"></div>
        <div class="secT_partTwo"></div>
      </div>
    
      </v-col>
  </v-row>
</div>
      
      
    
  </div>


</template>

<script>
export default {
name: 'checkOut',
data (){
  return{
    
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    
  }
}
}
</script>

