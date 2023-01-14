export default (ctx, inject) => {
    inject('util', {
      isEmail: function (email) {
        const emailFormat =
          /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailFormat.test(String(email).toLowerCase())
      },
      numberFormat(n, f) {
        if (isNaN(parseFloat(n))) {
          return '-'
        }
        const number = Number.parseFloat(n).toFixed(f)
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      },
      formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        if (match) {
          var first = match[2].split('')
          if (first[0] == '0') {
            var intlCode = match[1] ? '+1 ' : ''
            return [intlCode, '', match[2], '-', match[3], '-', match[4]].join('')
          } else {
            return null
          }
        }
        return null
      },
      isNumber(evt) {
        evt = evt || window.event
        const charCode = evt.which ? evt.which : evt.keyCode
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          (charCode < 96 || charCode > 105) &&
          charCode !== 46 &&
          charCode !== 110 &&
          charCode !== 190
        ) {
          evt.preventDefault()
        } else {
          // not pass
          return true
        }
      },
      isNumberOnly(evt) {
        evt = evt || window.event
        const charCode = evt.which ? evt.which : evt.keyCode
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          (charCode < 96 || charCode > 105) &&
          charCode !== 46
        ) {
          evt.preventDefault()
        } else {
          // not pass
          return true
        }
      },
      isWordOnly(evt) {
        evt = evt || window.event
        const charCode = evt.which ? evt.which : evt.keyCode
        if (
          charCode > 31 &&
          (charCode < 65 || charCode > 90) &&
          charCode !== 46
        ) {
          evt.preventDefault()
        } else {
          // not pass
          return true
        }
      },
      getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera
  
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
          return 'Windows Phone'
        }
  
        if (/android/i.test(userAgent)) {
          return 'Android'
        }
  
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return 'iOS'
        }
  
        return 'unknown'
      },
      setFormatDecimal(n, f) {
        if (n) {
          var v = n.toString().split('.')
          var v1 = v[0]
          var resValue = v1
          if (v.length > 1) {
            var v2 = v[1].substring(0, f)
            resValue = v1.concat('.', v2)
            if (parseInt(v2) == 0) return v1
          }
          return resValue
        }
        return 0
      },
    })
  }
  