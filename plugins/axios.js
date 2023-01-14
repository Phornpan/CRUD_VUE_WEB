export default ({ app: { $axios, router }, res, req, store, redirect }) => {
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  $axios.setHeader('Allow-Control-Allow-Origin', '*')

  $axios.interceptors.request.use(function (request) {
    // console.log(store.getters.token);
    if (store.getters.token) {
      // request.params = {
      //   username: store.getters.userInfo.username,
      // }
      request.headers.common.Authorization = 'Bearer ' + store.getters.token
    }
    return request
  })

  $axios.interceptors.response.use(
    function (response) {
      if (response.headers && 'authorization' in response.headers) {
        let token = response.headers.authorization
        if (token) {
          if (token.includes('Bearer')) {
            token = response.headers.authorization.split('Bearer ')
            token = token[1]
          }
          store.commit('UPDATE_AUTH_TOKEN', token)
        }
      }
      return response
    },
    function (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.log(error.response.config.url)
          store.commit('LOGOUT')
          router.push(`/`)
        } else if (error.response.data.Errors !== undefined) {
          const errors = error.response.data.Errors
          console.log(errors)
        } else {
          console.log(error)
        }
      }

      if (error.request) {
        console.log(error)
      }

      if (error.headers && 'authorization' in error.headers) {
        let token = error.headers.authorization
        if (token) {
          if (token.includes('Bearer')) {
            token = error.headers.authorization.split('Bearer ')
            token = token[1]
          }
          store.commit('UPDATE_AUTH_TOKEN', token)
        }
      }
      return Promise.reject(error)
    }
  )
}
