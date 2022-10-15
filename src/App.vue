<template>
  <v-app>
   <v-container>
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
          <div class="icon_group">
            dfsjdk
          </div>
          <div class="right_local">
            <div class="local_icon"><i></i></div>
            <div class="placment">United States</div>
          </div>
          <div class="copyright">© 2021 | Cora Leviene All Rights Reserved</div>
        </div>
      </div>
    </v-footer>
  </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "./style/main.scss";
</style>
