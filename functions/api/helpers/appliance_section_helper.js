const appliance = require("../enums/appliance_enum");
const sections = require("../enums/appliance_section_enum");

const createLink = (applianceId, sectionId) => {
  return `https://mytpi-dde27.firebaseio.com/api/appliance/${applianceId}/section/${sectionId}/rows`
}

const sectionObj = (applianceId, typeId) => [
  {
    index: sections.INSEPCTION_DETAILS,
    title: "Insection Details",
    availableTo: [appliance.MOBILE_CRANE],
    rows: createLink(applianceId, typeId)
  },
  {
    index: sections.APPLIANCE_DETAILS,
    title: "Appliance Details",
    availableTo: [appliance.MEWP],
    rows: createLink(applianceId, typeId)
  }
];

exports.sectionsFor = (snap) => {
  const type = snap.val().type
  return sectionObj(snap.key, type).filter($0 => $0.availableTo.includes(type));
};