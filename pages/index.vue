<template>
  <Tutorial />
</template>

<script>
export default {
  layout(context) {
    return 'login'
  },
  name: 'IndexPage',
  mounted() {
    const token = this.$store.getters.token
    console.log('token', token, !!token)
    if (!!token) {
      console.log('1111')
      this.$router.replace({
        name: 'master-resume',
      })
    } else {
      console.log('222')
      this.$router.replace({
        name: 'login',
      })
    }
  },
}
</script>
