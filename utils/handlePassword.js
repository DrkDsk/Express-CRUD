const bcryptjs = require('bcryptjs')

const encrypt = (plaintextPassword) => {
    return bcryptjs.hash(plaintextPassword, 12)
}

const compare = (plaintextPassword, hashedPassword) => {
    return bcryptjs.compare(plaintextPassword, hashedPassword)
}

module.exports = { encrypt, compare}