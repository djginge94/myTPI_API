const db = require("../../services/firebase").appliance_database;

function createResource(snapshot) {
  const arr = [];

  snapshot.forEach($0 => {
    const item = $0.val();
    item.id = $0.key;
    arr.push(item);
  });

  return arr;
}

module.exports = () =>
  new Promise((resolve, reject) => {
    db.once("value")
      .then($0 => resolve(createResource($0)))
      .catch($0 => reject($0));
  });
