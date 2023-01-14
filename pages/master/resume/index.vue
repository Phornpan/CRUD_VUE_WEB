<template>
  <b-card-group deck>
    <b-card header-tag="header" footer-tag="footer" header-class="carddisplay">
      <template #header>
        <div class="">
          <h6 class="mb-0">Master > Resume</h6>
        </div>
      </template>

      <b-row class="mb-4">
        <b-col>
          <div>
            <div class="inline-flex mr-1 mb-1">
              <nuxt-link :to="{ name: 'master-resume-form' }">
                <b-button variant="primary" class="btn-dark"
                  ><font-awesome-icon icon="fa-solid fa-plus" /> Add</b-button
                >
              </nuxt-link>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col>
          <div class="table-responsive">
            <b-table
              bordered
              table-class="text-nowrap"
              no-collapse
              head-variant="light"
              responsive
              sort-icon-left
              show-empty
              empty-text="Not found ..."
              :items="listdatas"
              :fields="fielditemsdata"
              :busy="!isBusy"
            >
              <template #table-busy>
                <div class="text-center my-2">
                  <b-spinner class="align-middle" />
                  <strong>Loading...</strong>
                </div>
              </template>

              <template v-slot:cell(setting)="data">
                <div class="text-center">
                  <font-awesome-icon
                    color="blue"
                    class="fas fa-lg mr-2"
                    icon="fa-solid fa-magnifying-glass "
                    @click="onRowGoView(data.item)"
                  />
                  <font-awesome-icon
                    color="gold"
                    class="fas fa-lg mr-2"
                    icon="fa-solid fa-pen"
                    @click="onRowGoEdit(data.item)"
                  />
                  <font-awesome-icon
                    color="red"
                    class="fas fa-lg mr-2"
                    icon="fa-solid fa-trash-can"
                    @click="onRowDelete(data.item)"
                  ></font-awesome-icon>
                </div>
              </template>
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <AlertSave ref="alert" />
  </b-card-group>
</template>

<script>
import AlertSave from '~/components/alert/save.vue'
import Swal from 'sweetalert2/src/sweetalert2.js'
import AddComponents from '~/components/body/AddButton.vue'
export default {
  components: {
    AlertSave,
    Swal,
    AddComponents,
  },
  data: function () {
    return {
      //fordata
      isBusy: false,
      listdatas: [],
      username: 'test', //ชื่อที่ login เข้ามาทำ active
      fielditemsdata: [
        {
          key: 'employeeID',
          label: 'EmployeeID',
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          key: 'name',
          label: 'Name',
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          key: 'surname',
          label: 'Surname',
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          key: 'address',
          label: 'Address',
          stickyColumn: true,
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          key: 'phoneNo',
          label: 'PhoneNo',
          stickyColumn: true,
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          key: 'email',
          label: 'Email',
          stickyColumn: true,
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          key: 'setting',
          label: 'Management',
          stickyColumn: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
    }
  },
  computed: {
    rows() {
      return this.total
    },
  },
  async mounted() {
    await this.getData()
  },
  methods: {
    async getData() {
      this.listdatas = []
      var res = await this.$APITest.SearchAll()

      if (res.success === true) {
        this.listdatas = res.data
        this.isBusy = true
      }
    },
    onRowGoView(items) {
      this.$router.push({
        name: 'master-resume-form-id',
        params: {
          id: items.employeeID,
        },
      })
    },
    onRowGoEdit(items) {
      this.$router.push({
        name: 'master-resume-form-id-edit',
        params: {
          id: items.employeeID,
        },
      })
    },
    async onRowDelete(items) {
      Swal.fire({
        text: 'คุณต้องการลบ ' + items.name + ' ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.isBusy = true
          var parm = {
            employeeID: items.employeeID,
            username: this.username,
          }
          var res = await this.$APITest.Delete(parm)
          this.currentPage = 1
          this.getData()
          if (res.success === true) {
            this.$refs['alert'].showBoxDeleteSuccess()
          } else {
            this.isBusy = false
            this.$refs['alert'].showBoxDeleteNotSuccess(res.message)
          }
        }
      })
    },
  },
}
</script>

<style></style>
