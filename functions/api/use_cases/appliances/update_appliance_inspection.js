const db = require("../../services/firebase").appliance_database;

function createResource(snap) {
  const obj = snap.val();
  obj.id = snap.key;
  return obj;
}

module.exports = (id, obj) =>
  new Promise((resolve, reject) => {
    db.child(id)
      .update(obj)
      .then(db.child(id).once("value"))
      .then($0 => resolve(createResource($0)))
      .catch($0 => reject($0));
  });
