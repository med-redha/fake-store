<template>
  <div class="userProfile">
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>User Profile</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical background-color="#F1F1F1">
        <v-tab class="mb-3">
          <span class="tabs_side">Personal Information</span>
          <v-spacer></v-spacer> <v-icon large>mdi-chevron-right</v-icon></v-tab
        >
        <v-tab class="mb-3">
          <span class="tabs_side">refer and earn</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon></v-tab
        >
        <v-tab class="mb-3">
          <span class="tabs_side">My Orders</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab class="mb-3">
          <span class="tabs_side">My Wishlist</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab class="mb-3">
          <span class="tabs_side">My Reviews</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab class="mb-3">
          <span class="tabs_side">My Adress Book</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab class="mb-3">
          <span class="tabs_side">My Saved Cards</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>

        <v-tab-item>
          <div class="tab_items ml-4 mb-12">
            <div class="cards_Title mb-4">
              <div class="title_holder mb-2">
                <div class="title_txt">Personal Information</div>
                <div>
                  <v-btn outlined color="#1b4b66"
                    ><v-icon small>mdi-logout</v-icon>
                    <span>Logout</span></v-btn
                  >
                </div>
              </div>

              <div class="devider"></div>
            </div>

            <div class="ProfileImg_holder my-6">
              <v-img class="profile_pic" src="../assets/aboutOne.jpg" alt="">
              </v-img>
              <div class="ProfilePic_btnGrp ml-2">
                <v-btn class="ProfilePic_btnOne" depressed color="#1b4b66"
                  ><span class="imgBtn_txt">Upload</span></v-btn
                >
                <v-btn class="ProfilePic_btnTwo" outlined color="red"
                  ><v-icon small>mdi-delete-</v-icon>
                  <span class="imgBtn_txtTwo">Delete</span>
                </v-btn>
              </div>
            </div>
            <div class="infoSection my-4">
              <div class="partONe_container">
                <div class="infoPart_one">
                  <span class="infoTxt">First Name</span>
                  <input type="text" class="inp_One mr-10" placeholder="john" />
                </div>
                <div class="infoPart_one my-4">
                  <span class="infoTxt mx-2">Last Name</span>
                  <input type="text" class="inp_One" placeholder="doe" />
                </div>
              </div>
              <div class="">
                <div class="infoPart_MfD my-2">
                  <span class="infoTxt">Email</span>
                  <input
                    type="text"
                    class="inp_mail"
                    placeholder="johnDoe@empl.com"
                  />
                </div>
                <div class="infoPart_MfD my-2">
                  <span class="infoTxt">Mobile Number</span>
                  <div>
                    <input type="text" class="inp_ph mr-2" placeholder="+11" />
                    <input type="text" class="inp_pht" placeholder="john" />
                  </div>
                </div>
                <div class="infoPart_MfD my-2">
                  <span class="infoTxt">Date Of Birth</span>
                  <input type="text" class="inp_phd" placeholder="DD/MM/yyyy" />
                </div>
              </div>
              <div class="PartTWo_container my-4">
                <div class="secnd_title my-4">
                  <span class="stitle_txt mb-4">Change Password</span>
                  <div class="devider mt-2"></div>
                </div>
                <div class="infoPart_two my-2">
                  <span class="infoTxt">current password</span>
                  <input
                    type="password"
                    class="inp_two"
                    placeholder="current password"
                  />
                </div>
                <div class="infoPart_twop my-2">
                  <span class="infoTxt">new password</span>
                  <input
                    type="password"
                    class="inp_two ml-8"
                    placeholder="new password"
                  />
                  <v-btn depressed color="#f1f1f1" class="inp_icn" height="52px"
                    ><v-icon small color="">mdi-eye-outline</v-icon></v-btn
                  >
                </div>
                <div class="infoPart_two my-2">
                  <span class="infoTxt">confirm password</span>
                  <input
                    type="password"
                    class="inp_two"
                    placeholder="confirm password"
                  />
                </div>
              </div>
            </div>
            <div class="save_holder my-6">
              <v-btn class="save_btn" depressed color="#1b4b66"
                ><span class="save_btnTxt">Save Changes</span></v-btn
              >
            </div>
          </div>
        </v-tab-item>
        <v-tab-item> hello </v-tab-item>
        <v-tab-item>
          <div>
            <my-orders :oreders="Oreders" />
            hello
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import MyOrders from "../components/myOrders.vue";
export default {
  name: "userProfile",
  components: {
    MyOrders,
  },
  data() {
    return {
      Oreders: [
        {
          title: "completed",
          headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false, align:'right' },
      ],
      desserts : [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
        },
        {
          title: "processing",
          headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts : [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
        },
        {
          title: "canceled",
          headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts : [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
        },
      ],
    };
  },
};
</script>
