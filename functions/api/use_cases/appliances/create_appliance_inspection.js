const db = require("../../services/firebase").appliance_database;
const sectionHelper = require("../../helpers/appliance_section_helper");

function createResource(snap) {
  const obj = snap.val();
  obj.id = snap.key;
  obj.sections = sectionHelper.sectionsFor(snap);
  return obj;
}

module.exports = obj =>
  new Promise((resolve, reject) => {
    db.push(obj)
      .then($0 => $0.once("value"))
      .then($0 => resolve(createResource($0)))
      .catch($0 => reject($0));
  });
