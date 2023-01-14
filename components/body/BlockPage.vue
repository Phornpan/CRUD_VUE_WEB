<template>
  <div>
    <div v-if="show" class="block-page">
      <div class="text-center my-2">
        <b-spinner variant="secondary" class="align-middle" />
        <strong class="text-secondary">Loading...</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'admin'
  },
  //   props: {
  //     show: {
  //       type: [Boolean],
  //       required: false,
  //       default: () => {
  //         return false
  //       },
  //     },
  //   },
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$root.$on('isShowBlockPage', (data) => (this.show = data))
  },
}
</script>

<style lang="css">
.block-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa70;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
