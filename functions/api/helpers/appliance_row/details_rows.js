const appliance = require("../../enums/appliance_enum");
const inputType = require("../../enums/input_type_enum");

const row = obj => [
  {
    index: 0,
    title: "Name",
    inputType: inputType.TEXT,
    availableTo: [appliance.MOBILE_CRANE],
    data: obj.sections[0][0] || null
  },
  {
    index: 1,
    title: "Inspection Date",
    inputType: inputType.DATE,
    availableTo: [appliance.MEWP],
    data: obj.sections[0][1] || null
  },
  {
    index: 2,
    title: "Inspection Type",
    inputType: inputType.TEXT,
    availableTo: [appliance.MOBILE_CRANE, appliance.MEWP],
    data: obj.sections[0][2] || null
  }
];

module.exports = data => {
  if (data.sections === undefined) {
    data.sections = { 0: {}};
  }
  return row(data).filter($0 => $0.availableTo.includes(data.type));
};
