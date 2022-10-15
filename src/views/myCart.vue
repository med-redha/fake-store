<template>
    <div class="myCart">
        <div class="bread"></div>
        <div class="mC_container">
            <div class="mCsection_one">
                <div class="mCso_table">
                    <div class="mCsoTitle_head">Product Name</div>
                    <div class="midTitle_holder">
                        <div class="mCsoTitle">Price</div>
                        <div class="mCsoTitle">Qty</div>
                        <div class="mCsoTitle">Subtotal</div>
                    </div>
                </div>
                <div class="mCsoComponent_container">

                </div>
                <div class="mCsoSub_header"></div>
                <div class="mCso_btnGrp">
                    <input class="mCso_input" type="text">
                    <v-btn class="mCso_btn"></v-btn>
                </div>
            </div>
            <div class="mCsection_two">
                <div class="mCst_header">Order Summary</div>
                <div class="mCst_details">
                    <div class="mCst_detailsTxt"></div>
                    <div class="mCst_detailsNum"></div>
                </div>
                <div class="mCst_btnGrp">
                    <v-btn class="mCst_btnOne">cs</v-btn>
                    <v-btn class="mCst_btnTwo">Po</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>