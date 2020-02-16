const db = require("../../services/firebase").appliance_database;
const sections = require("../../enums/appliance_section_enum");
const detailsRows = require("../../helpers/appliance_row/details_rows");

function createResource(snap) {
  var obj = detailsRows(snap.val());
  obj.links = {
    update: `https://mytpi-dde27.firebaseio.com/api/appliance/${snap.key}/section/${sections.INSPECTION_DETAILS}/rows`
  };
  return obj;
}

function getRows(snap, section) {
  switch (parseInt(section)) {
    case sections.INSPECTION_DETAILS:
      return createResource(snap);

    case sections.APPLIANCE_DETAILS:
      return;

    default:
      return;
  }
}

module.exports = (applianceId, sectionId) =>
  new Promise((resolve, reject) => {
    db.child(applianceId)
      .once("value")
      .then($0 => {
        const model = getRows($0, sectionId);
        
        if (model === undefined || model === null) {
          reject();
          return;
        }
        resolve(model);
      })
      .catch($0 => reject($0));
  });
