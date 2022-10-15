<template>
  <div class="category">
    <div class="category_Hero">
      <div class="categoryImage_container">
        <img class="catHero_img" src="../assets/categoryHero.jpg" alt="">
      </div>
      <div class="categoryHero_txt">
        <div class="catHero_header">UPTO 70% OFF</div>
        <div class="catHero_subHeader">BLACK FRIDAY</div>
      </div>
    </div>
    <div class="category_bread">w</div>
    <div class="category_headContainer">Handbags</div>
    <div class="category_section">
      <div class="category_filterContainer">w</div>
      <div class="category_listContainer">
        <category-display v-for="(display, index) in categoryDis" :key="index"  :display="display" />
        <div class="category_pagination" sub>
          <v-pagination v-model="page" :length="4" circle></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryDisplay from '../components/categoryDisplay.vue';
import grand from '../assets/arrivals/bagOne.jpg';
import remus from '../assets/arrivals/bagThree.jpg';
import couach from '../assets/arrivals/bagTwo.jpg';
import boujee from '../assets/arrivals/bagFour.jpg';


export default {
name:'categoryPage',
components:{
  CategoryDisplay,
},
  data () {
    return {
      categoryDis:[
        {
          img:grand,
          header:"Grand",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:remus,
          header:"Remus",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:couach,
          header:"Coach",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:boujee,
          header:"Boujee",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:grand,
          header:"Grand",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:grand,
          header:"Grand",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:grand,
          header:"Grand",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:grand,
          header:"Grand",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },
        {
          img:grand,
          header:"Grand",
          iconHead:"mdi-heart-outline",
          subtitle:"Blossom Pouch",
          star:"mdi-star",
          rate:"43 Ratings ",
          price:"$39.49",
          oldPrice:"$78.66",
          discount:"50% OFF",
        },

      ],
    }
  }
}
</script>

<style>

</style>