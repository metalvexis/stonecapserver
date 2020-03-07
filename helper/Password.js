import bcrypt from 'bcrypt'
const saltRounds = 10

export const genPw = async (plaintxt) => {
  return await bcrypt.hash(plaintxt, saltRounds);
}

export const checkPw = async (plaintxt, hash) => {
  return await bcrypt.compare(plaintxt, hash);
}

export const Password = {
  genPw,
  checkPw
}
