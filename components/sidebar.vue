<template>
  <div class="sidebar" :class="this.$store.state.tabmenu ? 'hide-side' : ''">
    <div class="box_sidebar">
      <div class="box-profile">
        <div class="text-center">
          <nuxt-link
            :to="{
              name: 'master-zone',
            }"
          >
            <span class="d-block mb-2">
              <b-img :src="pinimg" fluid></b-img>
            </span>
            <span class="my-3 text-black">
              {{ $store.getters.userInfo.username }}
              <!-- {{ $store.getters.userinfo.name }} -->
            </span>
          </nuxt-link>
        </div>
      </div>

      <!-- <div>
        <ul>
          <li v-for="item in menus" :key="item.text">
            <nuxt-link :to="item.path">{{ item.text }}</nuxt-link>
            <ul v-if="item.submenu" class="sub-menu" v-show="item.isActive">
              <li v-for="subitem in item.submenu" :key="subitem.text">
                <nuxt-link :to="subitem.path">{{ subitem.text }}</nuxt-link>
              </li>
            </ul>
            <a
              v-if="item.submenus"
              class="collapse-btn"
              @click.prevent="item.isActive = !item.isActive"
            >
              {{ item.isActive ? '-' : '+' }}
            </a>
          </li>
        </ul>
      </div> -->

      <div class="box-menu" v-for="(menu, index) in menus" :key="index">
        <ul
          @click.prevent="menu.isActive = !menu.isActive"
          :class="menu.isActive ? 'active' : ''"
        >
          <li :id="'collapse' + index" class="list-menu p-1">
            <span class="i-left">
              <font-awesome-icon :icon="'fa-solid ' + menu.icon" />
              <!-- <i class="fas icon_tab" :class="menu.icon" /> -->
            </span>
            <span class="i-text">
              {{ menu.menuName }}
            </span>
            <span class="i-right">
              <font-awesome-icon
                v-if="menu.isActive"
                icon="fa-solid fa-chevron-right"
              />
              <font-awesome-icon
                v-if="!menu.isActive"
                icon="fa-solid fa-chevron-down"
              />
              <!-- <i class="fa fa-chevron-right" /> -->
            </span>
          </li>
        </ul>

        <div class="box-submenu">
          <ul
            v-for="subitem in menu.subMenus"
            :key="subitem.subMenuName"
            @click="subMenuHandler(menu, subitem)"
            class="list-submenu"
            :class="subitem.isActive ? 'active' : ''"
            v-show="menu.isActive"
          >
            <li>
              <span class="i-left">
                <font-awesome-icon :icon="'fa-solid ' + subitem.icon" />
                <!-- <i class="fas icon_tab" :class="menu.icon" /> -->
              </span>
              <span class="i-text">
                {{ subitem.subMenuName }}
              </span>
              <span class="i-right">
                <!-- <font-awesome-icon icon="fa-solid fa-chevron-right" /> -->
                <!-- <i class="fa fa-chevron-right" /> -->
              </span>
            </li>
          </ul>
        </div>

        <!-- <b-collapse :id="'collapse' + index" class="m-0 p-0">
          <ul class="sub-menu list-unstyled m-0 p-0">
            <li
              v-for="(subMenu, submenuIndex) in menu.subMenu"
              :key="submenuIndex"
              class="list-menu m-0 pl-4 py-2 pointer-cursor"
              @click="onGoPage(menu, subMenu)"
            >
              <span class="i-left">
                <i class="fas icon_tab" :class="subMenu.icon" />
              </span>
              <span class="i-text text-last pl-0">
                {{ subMenu.name }}
              </span>
            </li>
          </ul>
        </b-collapse> -->
      </div>

      <div class="customer-sidebar">
        <!-- <nuxt-link
          :to="{
            name: 'changepassword',
          }"
        >
          <span class="text-primary">Change password</span>
        </nuxt-link> -->
        <b-button variant="secondary" size="sm" @click="onClickLogout"
          ><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
          Logout</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pinimg: require(`~/assets/images/pig.png`),
      // menus: [
      //   { text: 'Home', path: '/' },
      //   {
      //     text: 'About',
      //     path: '/about',
      //     isActive: false,
      //     submenus: [
      //       { text: 'Our team', path: '/about/team', isActive: false },
      //       { text: 'Our history', path: '/about/history', isActive: false },
      //       { text: 'Our values', path: '/about/values', isActive: false },
      //     ],
      //   },
      //   { text: 'Contact', path: '/contact' },
      // ],
      menus: [],
    }
  },
  async mounted() {
    await this.getMenu()
  },
  methods: {
    onClickLogout() {
      this.$bvModal
        .msgBoxConfirm('ยืนยันการออกจากระบบ?', {
          title: 'ออกจากระบบ',
          centered: true,
        })
        .then(async (value) => {
          if (value) {
            var res = await this.$APIAuth.Logout()

            if (res.success === true) {
              this.$store.commit('LOGOUT')
              this.$router.push('/login')
            } else {
              this.$refs['alert-save'].showBoxError(
                'ออกจากระบบไม่สำเร็จ',
                res.message
              )
            }
          }
        })
    },
    setMenuIndex(menu, submenu) {
      this.clearStore()
      this.$store.commit('SET_MENU', menu)
      this.$store.commit('SET_SUBMENU', submenu)
    },
    clearStore() {
      this.$store.commit('SET_MENU', null)
      this.$store.commit('SET_SUBMENU', null)
    },
    subMenuHandler(menu, submenu) {
      this.deviceSystem = this.$util.getMobileOperatingSystem()

      if (this.deviceSystem != 'unknown') {
        this.$store.commit('SET_TABMENU', true)
      }
      console.log('menu', menu)
      console.log('submenu', submenu)
      this.$router.push('/' + menu.path + '/' + submenu.path)
      console.log('--------------- here --------------------')
      this.menus.forEach((element) => {
        if (element.path == menu.path) {
          element.isActive = true
        }
        element.subMenus.forEach((subelement) => {
          if (subelement.path == submenu.path) {
            subelement.isActive = true
          } else {
            subelement.isActive = false
          }
        })
      })
      this.setMenuIndex(menu.path, submenu.path)
    },
    async getMenu() {
      var res = await this.$APIUser.GetMenu()
      if (res.success === true) {
        var pathStr = $nuxt.$route.path.split('?')[0]

        var pathArr = pathStr.split('/')
        var currMenu = pathArr[1]
        var currSubMenu = pathArr[2]
        res.data.forEach((element) => {
          if (element.path == currMenu) {
            element.isActive = true
            element.subMenus.forEach((subelement) => {
              if (subelement.path == currSubMenu) {
                subelement.isActive = true
                this.setMenuIndex(element.path, subelement.path)
              }
            })
          } else {
            element.subMenus.forEach((subelement) => {
              if (subelement.path != currSubMenu) {
                subelement.isActive = false
              }
            })
          }
        })
        this.menus = res.data
      }
    },
  },
}
</script>
