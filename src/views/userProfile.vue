<template>
  <div class="userProfile">
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title class="d-flex align-center "><v-btn icon to="/"><v-icon>mdi-chevron-left</v-icon></v-btn> <span>User Profile</span></v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical background-color="#F1F1F1" height="404px" class="mt-8">
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
                  <v-btn depressed color="#f1f1f1" height="52px"
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
          <div class="ml-2">
            <my-orders
              :oreders="Oreders"
              v-if="orders == false"
              @orders="orders = true"
            />
            <order-details @orders="orders = false" v-else />
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import MyOrders from "../components/myOrders.vue";
import OrderDetails from "../components/orderDetails.vue";
export default {
  name: "userProfile",
  components: {
    MyOrders,
    OrderDetails,
  },
  data() {
    return {
      orders: false,
      Oreders: [
        {
          title: "completed",
          headers: [
            {
              text: "Order ID",
              align: "start",
              sortable: false,
              value: "name",
            },
            { text: "Date", value: "date" },
            { text: "Price", value: "price" },
            { text: "Status", value: "status" },
            { text: "", value: "actions", sortable: false, align: "right" },
          ],
          desserts: [
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522647",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522646",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522645",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
          ],
        },
        {
          title: "processing",
          headers: [
            {
              text: "Order ID",
              align: "start",
              sortable: false,
              value: "name",
            },
            { text: "Date", value: "date" },
            { text: "Price", value: "price" },
            { text: "Status", value: "status" },
            { text: "", value: "actions", sortable: false, align: "right" },
          ],
          desserts: [
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522647",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
          ],
        },
        {
          title: "canceled",
          headers: [
            {
              text: "Order ID",
              align: "start",
              sortable: false,
              value: "name",
            },
            { text: "Date", value: "date" },
            { text: "Price", value: "price" },
            { text: "Status", value: "status" },
            { text: "", value: "actions", sortable: false, align: "right" },
          ],
          desserts: [
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
            {
              name: "#874522648",
              date: "September 5, 2020",
              price: "$218.50",
              status: "Paid",
            },
          ],
        },
      ],
    };
  },
};
</script>
