import { Password } from 'helper/Password.js'

import { DbModels } from 'db/'

export const AuthController = {
  async register ({ email, password, fName, lName, userType }) {
    if (!email || !password || !fName || !lName || !userType) throw new Error('INVALID_REGISTRATION')

    const userModel = userType === 'faculty' ? DbModels.Faculty : DbModels.Student

    password = await Password.genPw(password)
    await userModel.create({
      password,
      email,
      fName,
      lName
    })

    return true
  },

  async login ({ email, password }) {
    if (!email || !password) throw new Error('INVALID_CREDENTIALS')

    const option = { where: { email } }
    const faculty = await DbModels.Faculty.findOne(option)
    const student = await DbModels.Student.findOne(option)

    if (student === null && faculty === null) {
      return { isValidLogin: false }
    }

    const userModel = faculty || student

    const isValidLogin = await Password.checkPw(password, userModel.password)

    if (!isValidLogin) {
      return { isValidLogin, user: null, userType: null, roles: null }
    }

    return { isValidLogin, user: userModel, userType: faculty ? 'faculty' : 'student', roles: [] }
  }

}
