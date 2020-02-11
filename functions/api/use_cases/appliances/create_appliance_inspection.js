const db = require("../../services/firebase").appliance_database;

const inputType = {
  TEXT: 0,
  DATE: 1
};

const row = {
  NAME: {
    index: 0,
    title: "Name",
    input: inputType.TEXT
  }
};

const section = {
  INSEPCTION_DETAILS: {
    index: 0,
    title: "Insection Details"
  }
};

const appliance = {
  MOBILE_CRANE: {
    _index: 0,
    sections: [
      {
        type: section.INSEPCTION_DETAILS,
        rows: [row.NAME]
      }
    ]
  }
};

function createResource(snap) {
  const obj = snap.val();
  obj.id = snap.key;
  obj.sections = appliance.MOBILE_CRANE.sections;
  return obj;
}

module.exports = obj =>
  new Promise((resolve, reject) => {
    db.push(obj)
      .then($0 => $0.once("value"))
      .then($0 => resolve(createResource($0)))
      .catch($0 => reject($0));
  });
