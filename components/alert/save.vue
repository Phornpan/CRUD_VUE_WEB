<template>
  <div></div>
</template>

<script>
import Swal from 'sweetalert2/src/sweetalert2.js'
export default {
  components: {
    Swal,
  },
  mounted() {},
  methods: {
    showBoxSaveSuccess() {
      Swal.fire({
        text: 'บันทึกข้อมูลสำเร็จ',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
      }).then((value) => {
        this.$emit('eventSavetSuccess', value)
      })
    },
    showBoxSaveSuccessWithMessage(msg) {
      Swal.fire({
        title: 'บันทึกข้อมูลสำเร็จ',
        text: msg,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
      }).then((value) => {
        this.$emit('eventSavetSuccess', value)
      })
    },
    showBoxSaveNotSuccess(msg) {
      Swal.fire({
        title: 'บันทึกข้อมูลไม่สำเร็จ',
        text: msg,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
      }).then((value) => {
        this.$emit('eventSaveNotSuccess', value)
      })
    },
    showBoxDeleteSuccess() {
      Swal.fire({
        text: 'ลบข้อมูลสำเร็จ',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
      }).then((value) => {
        this.$emit('eventSavetSuccess', value)
      })
    },
    showBoxDeleteNotSuccess(msg) {
      Swal.fire({
        title: 'ลบข้อมูลไม่สำเร็จ',
        text: msg,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
      }).then((value) => {
        this.$emit('eventSaveNotSuccess', value)
      })
    },
    showBoxError(title, msg) {
      Swal.fire({
        title: title,
        text: msg,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
      }).then((value) => {
        this.$emit('eventSaveNotSuccess', value)
      })
    },
    showBoxSuccessWithMessage(title, msg) {
      Swal.fire({
        title: title,
        text: msg,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
      }).then((value) => {
        this.$emit('eventSavetSuccess', value)
      })
    },
    showBoxErrorExcel(title, msg, size) {
      let html = ``
      html =
        `<div style="
            text-align: left;
            width: max-content;
            margin: auto;"
        >` +
        msg.join('<br />') +
        `</div>`

      Swal.fire({
        title: title,
        html: html,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'ตกลง',
        width: size,
      }).then((value) => {
        this.$emit('eventSaveNotSuccess', value)
      })
    },
  },
}
</script>
