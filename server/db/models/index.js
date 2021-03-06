const User = require('./user')
const Content = require('./content')
const Interest = require('./interest')
const Type = require('./type')
const Location = require('./location')
const ApiSource = require('./apiSource')
const UserContent = require('./userContent')

Content.belongsToMany(User, {through: UserContent})
User.belongsToMany(Content, {through: UserContent})

Content.belongsTo(Type)
Type.hasMany(Content)

Content.belongsTo(ApiSource)
ApiSource.hasMany(Content)

User.belongsTo(Location)
Location.hasMany(User)

Content.belongsTo(Interest)
Interest.hasMany(Content)

module.exports = {
  User,
  Content,
  Interest,
  Type,
  Location,
  ApiSource,
  UserContent
}
