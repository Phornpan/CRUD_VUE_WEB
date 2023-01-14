import querystring from 'querystring'

export default ($axios) => ({
  SearchAll(queries) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$get(`Test/GetAll?${string}`)
  },
  TestGetByCode(queries) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$get(`Test/GetByCode?${string}`)
  },
  Create(queries, username) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$post(`Test/Create?username=${username}`, queries)
  },
  Update(queries, username) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$put(`Test/Update?username=${username}`, queries)
  },
  Delete(queries) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$delete(`Test/Delete?${string}`)
  },
})
