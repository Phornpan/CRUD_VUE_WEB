<template>
  <div>
    <b-card-group deck>
      <!-- v-loading="loading" -->
      <b-card
        header-tag="header"
        footer-tag="footer"
        header-class="carddisplay"
      >
        <template #header>
          <div class="">
            <h6 class="mb-0">Master > Resume > Edit</h6>
          </div>
        </template>

        <b-row class="mb-4">
          <b-col>
            <BackComponents />
            <b-button
              class="text-white"
              variant="success"
              :disabled="disabledOnSubmit"
              @click="submitForm('ruleForm')"
            >
              <font-awesome-icon icon="fa-solid fa-check" /> Save
            </b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="160px"
              class="demo-ruleForm"
              :label-position="labelPosition"
            >
              <el-form-item label="Name" prop="name">
                <el-input v-model="ruleForm.name" maxlength="50"></el-input>
              </el-form-item>

              <el-form-item label="Surname" prop="surname">
                <el-input v-model="ruleForm.surname" maxlength="50"></el-input>
              </el-form-item>

              <el-form-item label="Age" prop="age">
                <el-input
                  v-model.number="ruleForm.age"
                  maxlength="2"
                ></el-input>
              </el-form-item>

              <el-form-item label="Address" prop="address">
                <el-input v-model="ruleForm.address" maxlength="100"></el-input>
              </el-form-item>

              <el-form-item label="PhoneNo" prop="phoneNo">
                <el-input v-model="ruleForm.phoneNo" maxlength="10"></el-input>
              </el-form-item>

              <el-form-item label="Email" prop="email">
                <el-input v-model="ruleForm.email" maxlength="100"></el-input>
              </el-form-item>
            </el-form>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
    <AlertSave ref="alert-save" @eventSavetSuccess="redirectback" />
  </div>
</template>

<script>
import AlertSave from '~/components/alert/save.vue'
import BackComponents from '~/components/body/BackButton.vue'
import Swal from 'sweetalert2/src/sweetalert2.js'
export default {
  components: {
    Swal,
    AlertSave,
    BackComponents,
  },
  data() {
    return {
      username: 'test',
      ruleForm: {
        name: '',
        surname: '',
        age: '',
        phoneNo: '',
        address: '',
        email: '',
        isActive: true,
      },
      rules: {
        name: [
          {
            required: true,
            pattern: /^[A-Za-z???-???]+$/,
            message: '??????????????????????????? a-z,A-Z,???-??? ????????????????????????',
            trigger: ['blur', 'change'],
          },
        ],
        surname: [
          {
            required: true,
            pattern: /^[A-Za-z???-???]+$/,
            message: '??????????????????????????? a-z,A-Z,???-??? ????????????????????????',
            trigger: ['blur', 'change'],
          },
        ],
        age: [
          {
            required: true,
            pattern: /^[0-9]+$/,
            message: '??????????????????????????? 0-9 ????????????????????????',
            trigger: ['blur', 'change'],
          },
        ],
        phoneNo: [
          {
            required: true,
            pattern: /^[\d]{9,10}$/,
            message: '??????????????????????????? 0-9 ????????????????????????',
            trigger: ['blur', 'change'],
          },
        ],
        address: [
          {
            required: true,
            trigger: ['blur', 'change'],
          },
        ],
        email: [
          {
            required: true,
            message: '??????????????????????????? email address',
            pattern:
              /^[a-zA-Z0-9]+.*[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+.*[a-zA-Z0-9]+$/,
            trigger: ['blur', 'change'],
          },
        ],
      },
    }
  },
  computed: {
    labelPosition() {
      this.deviceSystem = this.$util.getMobileOperatingSystem()
      if (this.deviceSystem != 'unknown') {
        return 'top'
      } else {
        return 'right'
      }
    },
    disabledOnSubmit() {
      if (
        this.ruleForm.name.length == 0 ||
        this.ruleForm.name.trim().length == 0 ||
        this.ruleForm.surname.length == 0 ||
        this.ruleForm.surname.trim().length == 0 ||
        this.ruleForm.phoneNo.length == 0 ||
        this.ruleForm.phoneNo.trim().length == 0 ||
        this.ruleForm.address.length == 0 ||
        this.ruleForm.address.trim().length == 0
      ) {
        return true
      } else {
        return false
      }
    },
  },
  async mounted() {
    await this.getData()
  },
  methods: {
    // validateState(name) {
    //   if (name) {
    //     return this.zoneName.length < 20 ? true : false
    //   }
    // },
    async getData() {
      var obj = {
        EmployeeID: this.$route.params.id,
      }
      var res = await this.$APITest.TestGetByCode(obj)

      if (res.success === true) {
        this.ruleForm = res.data
        this.loading = false
      }
    },
    async submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Swal.fire({
            text: '??????????????????????????????????????????????????????',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#007bff',
            confirmButtonText: '????????????',
            cancelButtonText: '??????????????????',
            reverseButtons: true,
          }).then(async (result) => {
            if (result.isConfirmed) {
              this.$root.$emit('isShowBlockPage', true)
              var obj = this.ruleForm

              var res = await this.$APITest.Update(obj)

              if (res.success === true) {
                this.$root.$emit('isShowBlockPage', false)
                this.$refs['alert-save'].showBoxSaveSuccess()
              } else {
                this.$root.$emit('isShowBlockPage', false)
                this.$refs['alert-save'].showBoxSaveNotSuccess(res.message)
              }
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    redirectback() {
      this.$router.push({
        name: 'master-resume',
      })
    },
  },
}
</script>

<style></style>
