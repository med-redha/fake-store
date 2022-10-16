<template>
    <div class="categoryDisplay" >
        
        <div class="displayComponent_container" :display="display">
            <div class="displayComponent" >
                <div class="displayComponent_imgHolder">
                    <img class="displayComponent_img" :src="display.img " alt="">
                </div>
                <div class="displayComponent_txtSection">
                    <div class="displayComponent_header">
                        <div class="dcpHeader_txt">{{ display.header }} </div>
                        <v-icon class="dcpHeader_icon">{{ display.iconHead }} </v-icon>
                    </div>
                    <div class="displayComponent_subtitle">{{ display.subtitle }} </div>
                    <div class="displayComponent_ratingGrp">
                        <v-icon class="dcpRating_star" v-for="i in 4" :key="i">{{ display.star }} </v-icon>
                        <div class="dcpRating_count">{{ display.rate }} </div>
                    </div>
                    <div class="displayComponent_price">
                        <div class="dcp_price">{{ display.price }} </div>
                        <div class="dcp_oldPrice">{{ display.oldPrice }}</div>
                        <div class="dcp_discount">{{ display.discount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'categoryDisplay',
    props:{
        display: Object,
        
    }

}
</script>