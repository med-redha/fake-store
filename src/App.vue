<template>
  <v-app>
    <v-container>
      <v-app-bar color="white" dense rounded="" flat height="80px">
        <v-btn to="/" text  color="#17494D" icon x-large>CORA'L</v-btn>
        <v-tabs slider-size="20px" color="black" height="80px" class="ml-10" >
          <v-tab to="/category">Handbags</v-tab>
          <v-tab to="/product">Watches</v-tab>
          <v-tab>Skincare</v-tab>
          <v-tab>Jewellery</v-tab>
          <v-tab>Apparels</v-tab>
        </v-tabs>
        <v-text-field
          background-color="#f1f1f1"
          placeholder="Search for products or brands..."
          reverse
          rounded
          class="mt-6"
          height="44px"
        >
          <v-icon slot="append" color="red" class="my-1"> mdi-magnify </v-icon>
        </v-text-field>
        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon color="black" to="/userProfile">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon color="black">
          <v-icon >mdi-basket-check-outline</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      <v-footer color="#1B4B66" elevation="4" dark>
        <div class="footer">
          <div class="left_foot">
            <div class="leftfot_container">
              <div class="leftft_title">Shop by Category</div>
              <div class="ft_subclmns">
                <div class="left_subtitle">Shop by Category</div>
                <div class="left_subtitle">Shop by Category</div>
                <div class="left_subtitle">Shop by Category</div>
                <div class="left_subtitle">Shop by Category</div>
                <div class="left_subtitle">Shop by Category</div>
                <div class="left_subtitle">Shop by Category</div>
              </div>
            </div>
          </div>
          <div class="right_foot">
            <div class="icon_group">dfsjdk</div>
            <div class="right_local">
              <div class="local_icon"><i></i></div>
              <div class="placment">United States</div>
            </div>
            <div class="copyright">
              © 2021 | Cora Leviene All Rights Reserved
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
    //
  }),
};
</script>
<style lang="scss">
@import "./style/main.scss";
</style>
