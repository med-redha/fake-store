<template>
  <div class="category">
    <div class="category_Hero">
      <div class="categoryImage_container">
        <v-img class="catHero_img" src="../assets/categoryHero.jpg" alt="">
          <div class="categoryHero_txt">
            <div class="catHero_header">UPTO 70% OFF</div>
            <div class="catHero_subHeader">BLACK FRIDAY</div>
          </div>
        </v-img>
      </div>

    </div>
    <div class="category_bread">
      <v-breadcrumbs divider=">"></v-breadcrumbs>
    </div>
    <div class="category_headContainer">Handbags</div>
    <div class="category_section">
      <div class="category_filterContainer"></div>
      <div class="category_listContainer">
        <div class="displayFilter">
          <div class="df_lineOne">
              <v-icon color="primary" large>mdi-apps-box</v-icon>
              <v-icon large class="mr-2">mdi-format-list-bulleted</v-icon>
              <div class="df_lineTxt">Showing 1 - 40 of 145 items</div>
          </div>
          <div class="df_lineTwo">
              <div class="df_lineTxt">To Show : </div>
              <div>
              <input type="text" class="df_lineInput" placeholder="9">
              </div>
          </div>
          <div class="df_lineThree">
            <div class="df_lineTxt">Sort By </div>
            <v-select
            :items="items"
            filled
            solo
            background-color="#F1F1F1"
            flat
            label="Position"
            class="mt-7"
            ></v-select>
          </div>
      </div>
        <v-row>
          <v-col cols="4" v-for="(display, index) in categoryDis" :key="index" class="my-4">
            <category-display :display="display" />

          </v-col>
        </v-row>
        <div class="category_pagination" sub>
          <div class="text-center">
            <v-pagination v-model="page" :length="4"></v-pagination>
          </div>
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
  name: 'categoryPage',
  components: {
    CategoryDisplay,
  },
  data() {
    return {
      page: 1,
      items: ['Position', ],
      categoryDis: [
        {
          img: grand,
          header: "Grand",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: remus,
          header: "Remus",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: couach,
          header: "Coach",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: boujee,
          header: "Boujee",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: grand,
          header: "Grand",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: grand,
          header: "Grand",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: grand,
          header: "Grand",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: grand,
          header: "Grand",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },
        {
          img: grand,
          header: "Grand",
          iconHead: "mdi-heart-outline",
          subtitle: "Blossom Pouch",
          star: "mdi-star",
          rate: "43 Ratings ",
          price: "$39.49",
          oldPrice: "$78.66",
          discount: "50% OFF",
        },

      ],
    }
  }
}
</script>

<style>

</style>