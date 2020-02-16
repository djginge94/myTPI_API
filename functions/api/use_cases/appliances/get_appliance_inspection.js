const db = require("../../services/firebase").appliance_database;
const sectionHelper = require("../../helpers/appliance_section_helper");

function createResource(snap) {
  const obj = snap.val();
  obj.id = snap.key;
  console.log(obj, "OBJ");
  obj.sections = sectionHelper.sectionsFor(snap);
  return obj;
}

module.exports = id =>
  new Promise((resolve, reject) => {
    db.child(id)
      .once("value")
      .then($0 => resolve(createResource($0)))
      .catch($0 => reject($0));
  });
