<template>
  <v-app>
    <v-container>
      <v-app-bar color="white" dense  rounded="" flat height="80px">
        <v-btn to="/" text color="#17494D" icon x-large>CORA'L</v-btn>
        <div class="tab_wrapper">
          <v-tabs hide-slider fixed-tabs color="black" height="80px"  class="ml-10">
          <v-tab to="/category">Handbags</v-tab>
          <v-tab to="/product">Watches</v-tab>
          <v-tab>Skincare</v-tab>
          <v-tab>Jewellery</v-tab>
          <v-tab>Apparels</v-tab>
        </v-tabs>
        </div>
        <v-spacer></v-spacer>
        <v-text-field
          background-color="#f1f1f1"
          placeholder="Search for products or brands..."
          rounded
          hide-details
          class=""
          height="44px"
          full-width
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon color="black" to="/userProfile">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon color="black">
          <v-icon>mdi-basket-check-outline</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      <v-footer color="#1B4B66"  dark>
        <div class="footer">
         <div class="leftFooter_holder mt-6 mb-10">
          <div
            class="footer_left"
            v-for="(foot, index) in footer.left"
            :key="index"
          >
            <div class="list_title my-4">{{ foot.title }}</div>
            <div class="subtitle_holder" >
              <div class="list_subtitles my-2" v-for="(cnt, index) in foot.content " :key="index">{{ cnt }}</div>
            </div>
          </div>
         </div>
         <div class="rightFooter_holder mt-6 mb-10">
          <div class="footer_right ">
            <div class="icon holder ml-12 my-4">
              <v-icon color="#b6b6b6" x-large class="ml-12">mdi-facebook</v-icon>
              <v-icon color="#b6b6b6" x-large class="ml-3">mdi-instagram</v-icon>
              <v-icon color="#b6b6b6" x-large class="ml-3">mdi-twitter</v-icon>
              <v-icon color="#b6b6b6" x-large class="ml-3">mdi-youtube</v-icon>
            </div>
            <div class="location mr-2 my-2">
              <v-icon>mdi-map-marker-outline</v-icon>
              <span class="location_txt">United States</span>
            </div>
            <div class="copyR mr-2">© 2021 | Cora Leviene All Rights Reserved</div>
          </div>
        </div>
        </div>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    footer: {
      left: [
        {
          title: "Shop by Category",
          content: [
            "Skincare",
            "Personal Care",
            "Handbags",
            "Apparels",
            "Watches",
            "Eye Wear",
            "jewellery",
          ],
        },
        {
          title:"About",
          content:[
          "Contact Us",
            "About Us",
            "Careers",
            "Press",
          ],
        },
        {
          title:"Policy",
          content:[
          "Return Policy",
            "Terms of Use",
            "Sitemap",
            "Security",
            "Privacy",
            "EPR Complaince",
          ],
        },
      ],
    },
  }),
};
</script>
<style lang="scss">
@import "./style/main.scss";
</style>
