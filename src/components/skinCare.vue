<template>
    <div class="skinCare my-10" :skin="skin">
        <div class="skinCare_imgHolder">
            <v-img class="skinCare_img" :src="skin.img" alt="">
                <div class="skinCareTxt_holder">
                    <div class="skinCare_txt">{{ skin.header }} </div>
                    <div class="skinCare_btnholder">
                        <v-btn class="skinCare_btn" fab small>
                            <v-icon >{{ skin.icon }}</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-img>
        </div>

    </div>
</template>

<script>
export default {
    name: 'skinCare',
    props: {
        skin: Object,
    },
}
</script>