<template>
  <div class="fixed-topbar">
    <!-- <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      style="height: 81px; border-bottom: 1px solid #4f5962"
    > -->
    <b-navbar toggleable="lg" type="dark">
      <nuxt-link
        data-toggle="collapse"
        :to="{
          name: 'thread',
        }"
      >
        <b-navbar-brand @click="redirectDefault()">
          <figure class="my-1 ml-2">Swine Health</figure>
        </b-navbar-brand>
      </nuxt-link>
      <b-navbar-nav class="ml-auto mr-2">
        <b-nav-item >
          <el-badge :value="2" class="item bell-button" type="danger">
            <el-button size="large"><b-icon icon="bell"></b-icon></el-button>
          </el-badge>
        </b-nav-item>
      </b-navbar-nav>

      <!-- <b-navbar-toggle target="nav-collapse" class="d-none" />
      <b-collapse
        id="nav-collapse"
        is-nav
        class="d-xl-none d-sm-none d-md-none xxx"
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <el-badge :value="2" class="item bell-button" type="danger">
              <el-button size="large"><b-icon icon="bell"></b-icon></el-button>
            </el-badge>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // pinimg: require(`~/assets/images/pig.png`),
    }
  },
  methods: {
    redirectDefault() {
      this.$router.push('/thread')
    },
  },
}
</script>