<template>
  <div class="home">
    <div class="banner_container">
      <div class="banner_text">We are currently experiencing local customs clearance delays. For the latest updates,
        please check your order status here</div>
    </div>
    <div class="home_hero">
      <img class="home_heromg" src="../assets/homeHerosec.jpg" alt="">
      <div class="homeHero_header">
        <div class="homeHero_title">Carry your Funk</div>
        <div class="homeHero_sub">Trendy handbags collection for your party animal</div>
        <v-btn class="hero_btn">
          <v-icon>mdi-arrow-right</v-icon> See more
        </v-btn>
      </div>
    </div>
    <div class="homeSection_one my-10">
      <div class="sectionOne_header">
        <div class="section_title">New Arrivals</div>
        <div class="titleBtn_holder">
          <v-btn   color="#1b4b66"  text>veiw all <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
       <div class="homecardOne_container">
       <new-arrivals v-for="(arrival,index) in newArrival" :key="index" :arrival="arrival" /> 

      </div>
    </div>
    <div class="homeSection_two my-10">
      <div class="sectionTwo_title">
        <div class="sectionTitle_txt">Handpicked Collections </div>
      </div>
      <div class="cardTwo_container d-flex justify-space-between my-10">
        <handpicked-collections v-for="(hand, index) in handPicked " :key="index" :handpick="hand" />
      </div>
    </div>
    <div class="homeSection_three">
      <div class="secThree_titlecn">
        <div class="section_title">Shop by Brands</div>
      </div>
      <div class="cardThree_container ">
        <brands v-for="(brd, index) in brand " :key="index" :brd="brd" />
      </div>
    </div>
    <div class="homeSection_four my-10">
      <div class="sectionPart">
        <div class="fourImage_container ">
          <v-img class="home_img" src="../assets/sectionFourhero.jpg" alt="">
            <div class="sectionFour_txtHolder">
              <div class="fourTxt_title">LIFESTYLE</div>
              <div class="fourTxt_subtitle">Makeup Accessories from Top Brands</div>
            </div>
          </v-img>
        </div>
      
      </div>
      <div class="cardFour_container d-flex justify-space-between">
        <skin-care v-for="(skin, index) in skinCar" :key="index" :skin="skin" />
      </div>
    </div>

  </div>
</template>

<script>
//components
import NewArrivals from '../components/newArrivals.vue';
import SkinCare from '../components/skinCare.vue';
import HandpickedCollections from '@/components/handpickedCollections.vue';
import Brands from '@/components/brands.vue';


//images
import bagOne from '../assets/arrivals/bagOne.jpg';
import bagTwo from '../assets/arrivals/bagTwo.jpg';
import bagThree from '../assets/arrivals/bagThree.jpg';
import bagFour from '../assets/arrivals/bagFour.jpg';
import handBag from '../assets/handbag.jpg';
import perfume from '../assets/perfume.jpg';
import sunGlasses from '../assets/sunglasses.jpg';
import watch from '../assets/watch.jpg';
import makeOne from '../assets/makeupOne.jpg';
import makeTwo from '../assets/makeupTwo.jpg';
import logoOne from '../assets/logos/bibaLogo.jpg';
import logoTwo from '../assets/logos/chanelLogo.jpg';
import logoThree from '../assets/logos/dolceLogo.jpg';
import logoFour from '../assets/logos/hmLogo.jpg';
import logoFive from '../assets/logos/pradaLogo.jpg';
import logoSix from '../assets/logos/zaraLogo.jpg';



export default {
name: 'homePage',
components:{
    NewArrivals,
    SkinCare,
    Brands,
HandpickedCollections
},
  data (){
    return{
      newArrival:[
        {
          img:bagOne,
          header:"Grande",
          icon:"mdi-heart-outline",
          subtitle: "Blossom Pouch",
          price:"$39.49",
        },
        {
          img:bagTwo,
          header:"Coach",
          icon:"mdi-heart-outline",
          subtitle: "Leather Coach Bag",
          price:"$54.69",
        },
        {
          img:bagThree,
          header:"Remus",
          icon:"mdi-heart-outline",
          subtitle: "Brown Strap Bag",
          price:"$57.00",
        },
        {
          img:bagFour,
          header:"Boujee",
          icon:"mdi-heart-outline",
          subtitle: "Black Bag",
          price:"$56.49",
        },
        
        
      ],
      handPicked:[
        {
          img:perfume,
          title:"Personal Care",
        },
        {
          img:handBag,
          title:"Handbags",
        },
        {
          img:watch,
          title:"Wrist Watches",
        },
        {
          img:sunGlasses,
          title:"Sun Glasses",
        },
      ],
      brand:[
        {
          img:logoOne,
        },
        {
          img:logoTwo,
        },
        {
          img:logoThree,
        },
        {
          img:logoFour,
        },
        {
          img:logoFive,
        },
        {
          img:logoSix,
        },
      ],
      skinCar:[
        {
          img:makeOne,
          header:"Skincare Essentials",
          icon:"mdi-arrow-right",
        },
        {
          img:makeTwo,
          header:"Facepacks & Peels",
          icon:"mdi-arrow-right",
        },
      ],
    }
  }
}
</script>
