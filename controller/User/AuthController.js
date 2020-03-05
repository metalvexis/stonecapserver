import Password from 'helper/Password.js'

import { DbModels } from 'db/'

export class AuthController {
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
  }

  async login ({ email, password }) {
    if (!email || !password) throw new Error('INVALID_CREDENTIALS')
    const faculty = DbModels.Faculty.findOne({ email })
    const student = DbModels.Student.findOne({ email })

    if (!student || !faculty) {
      throw new Error('USER_NOT_FOUND')
    }

    const userModel = faculty || student

    const isValidLogin = await Password.checkPw(password, userModel.password)

    return isValidLogin
  }

}
