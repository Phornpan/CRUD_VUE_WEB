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
  Create(queries) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$post(`Test/Create`, queries)
  },
  Update(queries) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$put(`Test/Update`, queries)
  },
  UpdateIsActive(queries) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$put(`Test/UpdateIsActive`, queries)
  },
  Delete(queries) {
    let string = ''
    if (queries) {
      string = querystring.stringify(queries)
    }
    return $axios.$delete(`Test/Delete?${string}`)
  },
  // ExportData() {
  //   return $axios.$get(`Test/Export`)
  // },
  // Exportemplate() {
  //   return $axios.$get(`Test/exportemplate/`)
  // },
})
