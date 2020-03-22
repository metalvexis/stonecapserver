import { Password } from 'helper/Password.js'

import { DbModels } from 'db/'

export const AuthController = {
  async register ({ email, password, fName, lName, userType }) {
    if (!email || !password || !fName || !lName || !userType) throw new Error('INVALID_REGISTRATION')

    const { user } = await findUserByEmail(email)

    if (!user) {
      const userModel = userType === 'faculty' ? DbModels.Faculty : DbModels.Student

      password = await Password.genPw(password)
      await userModel.create({
        password,
        email,
        fName,
        lName
      })

      return true
    }

    return false
  },

  async login ({ email, password }) {
    if (!email || !password) throw new Error('INVALID_CREDENTIALS')

    const { user, userType } = await findUserByEmail(email)

    if (user === null) {
      return { isValidLogin: false, user: null, userType: null }
    }

    const isValidLogin = await Password.checkPw(password, user.password)

    return { isValidLogin, user, userType }
  }

}

async function findUserByEmail (email) {
  const option = { where: { email } }
  const faculty = await DbModels.Faculty.findOne(option)
  const student = await DbModels.Student.findOne(option)

  const existingUser = faculty || student

  return {
    user: existingUser,
    userType: faculty ? 'faculty' : 'student'
  }
}
