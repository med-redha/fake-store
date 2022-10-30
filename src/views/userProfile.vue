<template>
  <div class="userProfile">
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>User Profile</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical background-color="#F1F1F1">
        <v-tab>
          <span class="tabs_side">Personal Information</span>
          <v-spacer></v-spacer> <v-icon large>mdi-chevron-right</v-icon></v-tab
        >
        <v-tab>
          <span class="tabs_side">refer and earn</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon></v-tab
        >
        <v-tab>
          <span class="tabs_side">My Orders</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab>
          <span class="tabs_side">My Wishlist</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab>
          <span class="tabs_side">My Reviews</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab>
          <span class="tabs_side">My Adress Book</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>
        <v-tab>
          <span class="tabs_side">My Saved Cards</span> <v-spacer></v-spacer>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-tab>

        <v-tab-item>
          <div class="tab_items">
            <div class="cards_Title">
              <div></div>
              <div></div>
              <v-devider></v-devider>
            </div>

            <div class="ProfileImg_holder">
              <v-img class="profile_pic" src="" alt=""> </v-img>
              <div class="ProfilePic_btnGrp">
                <v-btn class="ProfilePic_btnOne"></v-btn>
                <v-btn class="ProfilePic_btnTwo"></v-btn>
              </div>
            </div>
            <div class="infoSection">
              <div class="partONe_container">
                <div class="infoPart_one">
                  <span>First Name</span>
                  <input type="text" class="inp_One" placeholder="john" />
                </div>
                <div class="infoPart_one">
                  <span class="infoTxt">First Name</span>
                  <input type="text" class="inp_One" placeholder="doe" />
                </div>
              </div>
              <div class="infoPart_one">
                <span>Email</span>
                <input
                  type="text"
                  class="inp_mail"
                  placeholder="johnDoe@empl.com"
                />
              </div>
              <div class="infoPart_one">
                <span>Mobile Number</span>
                <div>
                  <input type="text" class="inp_ph" placeholder="+11" />
                  <input type="text" class="inp_One" placeholder="john" />
                </div>
              </div>
              <div class="infoPart_one">
                <span>Date Of Birth</span>
                <input type="text" class="inp_One" placeholder="DD/MM/yyyy" />
              </div>
              <div class="PartTWo_container">
                <div class="secnd_title">
                  <span class="stitle_txt">Cange Password</span>
                  <v-devider></v-devider>
                </div>
                <div class="infoPart_one">
                  <span>current password</span>
                  <input type="password" class="inp_One" placeholder="....." />
                </div>
                <div class="infoPart_one">
                  <span>new password</span>
                  <input type="password" class="inp_One" placeholder="....." />
                  <v-icon small>mdi-eye-outline</v-icon>
                </div>
                <div class="infoPart_one">
                  <span>confirm password</span>
                  <input
                    type="password"
                    class="inp_One"
                    placeholder=".........."
                  />
                </div>
              </div>
            </div>
            <div class="save_holder">
              <v-btn class="save_btn" depressed
                ><span>Save Changes</span></v-btn
              >
            </div>
          </div>
        </v-tab-item>
        <v-tab-item><div></div> </v-tab-item>
        <v-tab-item>
          <div></div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
