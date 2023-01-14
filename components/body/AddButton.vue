<template>
  <div v-if="this.$store.getters.getsubheadmenu">
    <nuxt-link
      :to="{
        name:
          this.$store.getters.getheadmenu +
          '-' +
          this.$store.getters.getsubheadmenu +
          '-form',
      }"
    >
      <b-button variant="primary" class="btn-dark"
        ><font-awesome-icon icon="fa-solid fa-plus" /> Add</b-button
      >
    </nuxt-link>
  </div>
</template>