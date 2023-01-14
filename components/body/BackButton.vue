<template>
  <!-- <nuxt-link
      :to="{
        name:
          this.$store.getters.getheadmenu.ename +
          '-' +
          this.$store.getters.getsubheadmenu.ename,
      }"
    > -->
  <!-- <el-button type="info" @click="goBack"
      ><i class="fas fa-chevron-left mr-1"></i>Back</el-button
    > -->

  <b-button class="text-white" variant="primary" @click="goBack"
    ><font-awesome-icon icon="fa-solid fa-chevron-left" /> Back</b-button
  >
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>

<style></style>
