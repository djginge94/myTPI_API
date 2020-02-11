const db = require("../../services/firebase").appliance_database;

module.exports = id =>
  new Promise((resolve, reject) => {
    db.child(id)
      .remove()
      .then(resolve())
      .catch($0 => reject($0));
  });
