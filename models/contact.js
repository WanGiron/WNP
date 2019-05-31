

// Creates a "users" model that matches up with DB
module.exports = function (sequelize, DataType) {
  var contact = sequelize.define("contact", {
    user_name: DataType.STRING,
    user_email: DataType.STRING,
    phone_number: DataType.INTEGER,
    user_message: DataType.STRING
  });

  return contact;
}



