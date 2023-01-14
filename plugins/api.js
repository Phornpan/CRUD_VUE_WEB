
// import AuthRepository from '~/api/auth/login'

// core menu
// import UserRepository from '~/api/master/user'
// import SelectlistRepository from '~/api/master/selectlist'

// master api
import TestRepository from '~/api/master/test'
// import OrganSystemRepository from '~/api/master/organ'
// import TagRepository from '~/api/master/tag'
// import PositionRepository from '~/api/master/position'

export default (ctx, inject) => {
  // inject('APIAuth', AuthRepository(ctx.$axios))

  // master
  inject('APITest', TestRepository(ctx.$axios))

  // operation
}
