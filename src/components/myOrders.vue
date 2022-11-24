<template>
  <div class="myOrders" :oreders="oreders">
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>My Orders</v-toolbar-title>
    </v-toolbar>
    <v-tabs>
      <v-tab v-for="(oreder, index) in oreders" :key="index">
        {{ oreder.title }}
      </v-tab>

      <v-tab-item  v-for="(oreder, index) in oreders" :key="index">
        <v-data-table
        hide-default-footer
          :headers="oreder.headers"
          :items="oreder.desserts"
          item-key="name"
          v-model="selected"
          show-select
        >
          <template v-slot:[`item.actions`]="{item}">
           <v-btn icon to="/order" >
            <v-icon large color="black"   >
              mdi-chevron-right
              {{item}}
            </v-icon>
           </v-btn>
          </template>
         
        </v-data-table>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "myOrders",
  props: {
    oreders: Array,
  },
  data(){
    return{
      selected: [],
    }
  }
};
</script>

<style></style>
